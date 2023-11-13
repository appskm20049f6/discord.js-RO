import { Events } from "discord.js";
import { useAppstore } from "@/store/app";

export const event = {
  name: Events.InteractionCreate,
};

export const action = async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const appStore = useAppstore();
  const action = appStore.commentsActionMap.get(interaction.commandName);

  await action(interaction);
};
