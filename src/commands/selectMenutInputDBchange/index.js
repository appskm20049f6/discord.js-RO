import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} from "discord.js";

import { sheet_data } from "@/core/googleSheet";

export const command = new SlashCommandBuilder()
  .setName("練等地圖輸入版調整中請勿使用")
  .setDescription("資料來源巴哈新手精華區")
  .addStringOption((option) =>
    option.setName("輸入您的等級").setDescription("等級區間").setRequired(true)
  );

export const action = async (ctx) => {
  // 獲取參數
  const levelInput = ctx.options.getString("輸入您的等級");
  const content = await replayContent();

  await ctx.reply(content);
};

const replayContent = async () => {
  try {
    const res = await sheet_data;
    return `${res[0].url}`;
  } catch (err) {
    console.log("sheet_data-err", err);
    return "發生錯誤";
  }
};
