import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} from "discord.js";

import { sheet_data } from "@/core/googleSheet";
import { FirebaseDB } from "../../core/firebsaeDB";
import { getDatabase, ref, set, get } from "firebase/database";

export const command = new SlashCommandBuilder()
  .setName("資料庫交換中這個不要用")
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

//取得Firebase資料
const fetchData = async () => {
  const userRef = ref(FirebaseDB, "Ro練功地圖"); // 你的路径
  try {
    const snapshot = await get(userRef);
    const data = snapshot.val();
    return data; // 返回数据
  } catch (error) {
    console.error("获取数据时发生错误:", error.message);
  }
};

// 使用 await
const result = await fetchData();
console.log(result);

const replayContent = async (levelInput) => {
  try {
    const res = await sheet_data;
    const expMap = [];

    //取得Firebase資料
    const fetchData = async () => {
      const userRef = ref(FirebaseDB, "Ro練功地圖"); // 你的路径
      try {
        const snapshot = await get(userRef);
        const data = snapshot.val();
      } catch (error) {
        console.error("获取数据时发生错误:", error.message);
      }
    };
    console.log(fetchData);
    return `${fetchData()}`;

    //將回復的等級用陣列的方式去讀取api內的資料符合的輸入至expMap陣列中
  } catch (err) {
    console.log("sheet_data-err", err);
    return "資料發生錯誤，請確認輸入的內容為正確的等級區間";
  }
};