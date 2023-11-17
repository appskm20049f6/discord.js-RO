import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} from "discord.js";

export const command = new SlashCommandBuilder()
  .setName(`ep主線流程製作中請勿使用`)
  .setDescription("資料來源巴哈新手精華區");

export const action = async (ctx) => {
  // 建立選擇單選單
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId("EPmain")
    .setPlaceholder("選擇想解的主線")
    .addOptions([
      new StringSelectMenuOptionBuilder()
        .setLabel("EP16.1")
        .setValue("七王主線貴族套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP16.2")
        .setValue("星火同盟主線王室套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP17.1")
        .setValue("虛幻浮現主線幻象恩典套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP17.2")
        .setValue("賢者遺跡主線餐卷全自動套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP18")
        .setValue("祈禱的方向灰狼套裝"),
    ]);
  //製作左右按鈕並且把他們組合在一起
  const leftButton = new ButtonBuilder()
    .setLabel("上一頁")
    .setCustomId("left")
    .setStyle(ButtonStyle.Primary);
  const rightButton = new ButtonBuilder()
    .setLabel("下一頁")
    .setCustomId("right")
    .setStyle(ButtonStyle.Primary);
  const row = new ActionRowBuilder().addComponents(leftButton, rightButton);

  // 使用 ctx.reply() 回覆消息並包含選擇單選單
  await ctx.reply({
    content: "請選擇想解的主線：",
    components: [{ type: 1, components: [selectMenu] }], // 此處修改為正確的 Action Row
  });

  // 等待用戶選擇並過濾用戶的選項是否正確
  const filter = (interaction) =>
    interaction.isStringSelectMenu() && interaction.customId === "EPmain";

  // 等待用戶互動
  const collector = ctx.client.on("interactionCreate", async (interaction) => {
    // 等待用戶選擇
    if (filter(interaction)) {
      const selectedValue = interaction.values[0];

      //用戶選擇
      if (selectedValue === "七王主線貴族套裝") {
        //出現相關資料並且給予按鈕選項
        const response = await interaction.reply({
          content: `七王主線貴族套裝`,
          components: [row],
        });
        console.log("第一次回應沒問題");

        // 等待用戶按鈕選擇
      } else {
        await interaction.reply(
          "抱歉您遇到了無法解決的問題，請聯絡開發者詢問狀況。"
        );
      }
    }
  });

  // 等待用戶按鈕選擇
  const buttonCollector = ctx.client.on(
    "interactionCreate",
    async (interaction) => {
      if (interaction.isButton()) {
        if (interaction.customId === "left") {
          await interaction.update({
            content: "請選擇想解的主線：",
            components: [{ type: 1, components: [selectMenu] }],
          });
        } else if (interaction.customId === "right") {
          await interaction.update({
            content: "請選擇想解的主線：",
            components: [{ type: 1, components: [selectMenu] }],
          });
        }
      }
    }
  );
};
