import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("練等地圖輸入版")
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
    } else {
      return `等級：${levelInput}製作中`;
    }
  };

  await ctx.reply(replayContent());
};
