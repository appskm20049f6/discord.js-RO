import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
} from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("練等地圖選擇版")
  .setDescription("幾等要去哪裡練，選擇自己的等級!");

export const action = async (ctx) => {
  // 建立選擇單選單
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId("LVmapSelectMenu")
    .setPlaceholder("選擇等級")
    .addOptions([
      new StringSelectMenuOptionBuilder().setLabel("100~").setValue("100"),
      new StringSelectMenuOptionBuilder().setLabel("120").setValue("120"),
      new StringSelectMenuOptionBuilder().setLabel("130").setValue("130"),
    ]);

  // 使用 ctx.reply() 回覆消息並包含選擇單選單
  await ctx.reply({
    content: "請選擇地圖：",
    components: [{ type: 1, components: [selectMenu] }], // 此處修改為正確的 Action Row
  });
  // 等待用戶選擇並過濾用戶的選項是否正確
  const filter = (interaction) =>
    interaction.isStringSelectMenu() &&
    interaction.customId === "LVmapSelectMenu";

  // 等待用戶互動
  const collector = ctx.client.on("interactionCreate", async (interaction) => {
    if (filter(interaction)) {
      const selectedValue = interaction.values[0];
      await interaction.reply(`你選擇了等級：${selectedValue}`);
      collector.removeAllListeners(); // 移除事件監聽器
      console.log(selectedValue);
    }
  });
};
