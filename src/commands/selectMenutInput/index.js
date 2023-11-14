import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} from "discord.js";
import axios from "axios";

export const command = new SlashCommandBuilder()
  .setName("這等級要去哪裡練等")
  .setDescription("資料來源巴哈新手精華區")
  .addStringOption((option) =>
    option.setName("輸入您的等級").setDescription("等級區間").setRequired(true)
  );

export const action = async (ctx) => {
  // 獲取參數
  const levelInput = ctx.options.getString("輸入您的等級");
  const replayContent = () => {
    if (levelInput < 100) {
      return `你現在的等級是${levelInput}等，推薦練功地點是。https://cdn.discordapp.com/attachments/1173797883481432134/1173797905098870885/image.png`;
    }
    if (levelInput >= 110 && levelInput < 125) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173800066230800517/image.png`;
    } else if (levelInput >= 125 && levelInput < 150) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173800648093991012/image.png`;
    } else if (levelInput >= 140 && levelInput < 155) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173801451416469504/image.png`;
    } else if (levelInput >= 150 && levelInput < 170) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173803851984404580/image.png`;
    } else if (levelInput >= 160 && levelInput < 170) {
      return `https://media.discordapp.net/attachments/1173805554074931220/1173831295533580298/image.png`;
    } else if (levelInput >= 170 && levelInput < 185) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173803925544124467/image.png`;
    } else if (levelInput >= 180 && levelInput < 195) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173803976467169322/image.png`;
    } else if (levelInput >= 185 && levelInput < 200) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173804011837726852/image.png`;
    } else if (levelInput >= 185 && levelInput < 200) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173804156725776384/image.png`;
    } else if (levelInput >= 190 && levelInput < 200) {
      return `https://media.discordapp.net/attachments/1173797883481432134/1173804055173275648/image.png`;
    } else {
      return `你現在的等級是${levelInput}等，推薦練功地點還在製作中喔。`;
    }
  };

  await ctx.reply(replayContent());
};
