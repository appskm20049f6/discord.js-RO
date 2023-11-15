import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} from "discord.js";

import { sheet_data } from "@/core/googleSheet";


export const command = new SlashCommandBuilder()
  .setName("我幾等去哪練比較好")
  .setDescription("資料來源巴哈新手精華區")
  .addStringOption((option) =>
    option.setName("輸入您的等級").setDescription("等級區間").setRequired(true)
  );

export const action = async (ctx) => {
  // 獲取參數
  const levelInput = ctx.options.getString("輸入您的等級");
  const content = await replayContent(levelInput);

  await ctx.reply(content);
};

const replayContent = async (levelInput) => {
  try {
    const res = await sheet_data;
    const expMap = [];

    //將回復的等級用陣列的方式去讀取api內的資料符合的輸入至expMap陣列中
    for (let index = 0; index < res.length; index++) {
      if (
        levelInput >= parseInt(res[index].lvMix) &&
        levelInput <= parseInt(res[index].lvMax)
      ) {
        expMap.push(`${res[index].mapName}:${res[index].url}`);
      }
    }
    return `${expMap.join("\n")}`;
  } catch (err) {
    console.log("sheet_data-err", err);
    return "資料發生錯誤，請確認輸入的內容為正確的等級區間";
  }
};
