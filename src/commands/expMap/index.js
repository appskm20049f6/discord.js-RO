import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
  .setName("練等地圖")
  .setDescription("幾等要去哪裡練，記得輸入自己的等級喔");

export const action = async (ctx) => {
  ctx.reply("請輸入你的等級喔！數字！");
};
