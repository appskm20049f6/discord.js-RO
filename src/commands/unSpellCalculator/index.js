import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("數值無詠計算機")
  .setDescription("無詠計算機，請勿隨意更動公式");

export const action = async (ctx) => {
  ctx.reply(
    "https://docs.google.com/spreadsheets/d/1EMzvGrTtJFIyEhjS6sLhi01763SI7aoOJkzcwdvdhVE/edit#gid=753902965"
  );
};
