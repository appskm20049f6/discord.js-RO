import { Guild, REST, Routes } from 'discord.js'
import fg, { async } from 'fast-glob'


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
  console.log(restult);
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

export const loadCommands= async()=>{
    const commands = [];
    const files = await fg("./src/commands/**/index.js");

    for (const file of files) {
      const cmd = await import(file);
      commands.push(cmd.command);
    }

    await updateSlash(commands);
}