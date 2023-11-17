import { Guild, REST, Routes, Collection } from "discord.js";
import fg, { async } from "fast-glob";
import { useAppstore } from "../store/app";
import { event } from "../events/ready";

//用來更新上傳斜線指令用的
const updateSlash = async (commands) => {
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  const restult = await rest.put(
    Routes.applicationGuildCommands(
      process.env.APPLICATION_ID,
      process.env.GUILD_ID
    ),
    {
      body: commands,
    }
  );
  await rest.put(
    Routes.applicationGuildCommands(
      process.env.APPLICATION_ID,
      process.env.GUILD_ID2
    ),
    {
      body: commands,
    }
  );
};

//透過FG讓bot每次執行的時候都刷過一輪我們的index.js數量
export const loadCommands = async () => {
  const appStore = useAppstore();
  const commands = [];
  const actions = new Collection();
  const files = await fg("./src/commands/**/index.js");

  //抓出指令的上半部分指令對外的名稱以及說明
  for (const file of files) {
    const cmd = await import(file);
    commands.push(cmd.command);
    actions.set(cmd.command.name, cmd.action);
  }

  await updateSlash(commands);
  appStore.commentsActionMap = actions;

  console.log(appStore.commentsActionMap);
};

export const loadEvents = async () => {
  const appStore = useAppstore();
  const client = appStore.client;
  const files = await fg("./src/events/**/index.js");

  for (const file of files) {
    const eventfiles = await import(file);

    if (eventfiles.event.once) {
      client.once(eventfiles.event.name, eventfiles.action);
    } else {
      client.on(eventfiles.event.name, eventfiles.action);
    }
  }
};
