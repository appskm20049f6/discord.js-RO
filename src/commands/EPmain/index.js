import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} from "discord.js";

export const command = new SlashCommandBuilder()
  .setName(`ep主線流程攻略`)
  .setDescription("資料來源巴哈新手精華區");

export const action = async (ctx) => {
  // 建立選擇單選單
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId("EPmain")
    .setPlaceholder("選擇想解的主線")
    .addOptions([
      new StringSelectMenuOptionBuilder()
        .setLabel("EP16.1-幻色童話Lv100up")
        .setValue("七王主線貴族套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP16.2-星火同盟Lv100up")
        .setValue("星火同盟主線王室套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP17.1-虛幻浮現Lv110up")
        .setValue("虛幻浮現主線幻象恩典套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP17.2-賢者遺跡Lv130up")
        .setValue("賢者遺跡主線餐卷全自動套裝"),
      new StringSelectMenuOptionBuilder()
        .setLabel("EP18-祈禱的方向Lv170up")
        .setValue("祈禱的方向灰狼套裝"),
    ]);
  //製作左右按鈕並且把他們組合在一起

  const rightButton = new ButtonBuilder()
    .setLabel("確認條件")
    .setCustomId("right")
    .setStyle(ButtonStyle.Primary);

  const indexButton = new ButtonBuilder()
    .setLabel("回到任務選擇")
    .setCustomId("index")
    .setStyle(ButtonStyle.Primary);
  const row = new ActionRowBuilder().addComponents(indexButton, rightButton);
  const indexMenu = new ActionRowBuilder().addComponents(indexButton);

  // 使用 ctx.reply() 回覆消息並包含選擇單選單
  await ctx.reply({
    content: "請選擇想解的主線：",
    components: [{ type: 1, components: [selectMenu] }], // 此處修改為正確的 Action Row
  });

  // 等待用戶選擇並過濾用戶的選項是否正確
  const filter = (interaction) =>
    interaction.isStringSelectMenu() && interaction.customId === "EPmain";

  // 紀錄用戶選擇
  const memory = [];
  // 等待用戶互動
  const collector = ctx.client.on("interactionCreate", async (interaction) => {
    // 等待用戶選擇
    if (filter(interaction)) {
      const selectedValue = interaction.values[0];

      //用戶選擇
      if (selectedValue === "七王主線貴族套裝") {
        //出現相關資料並且給予按鈕選項
        const response = await interaction.reply({
          content: `
          主線任務：EP16.1 幻色童話
          前置任務要求：征戰異世界。
          等級要求：台灣伺服：100等以上。
          需求物品：無。
          注意事項：需要進行Boss戰，若無法進行通過將無法進入地圖「受侵略的普隆德拉」、副本「空中要塞」但可繼續前往ep17.2。
          `,
          components: [row],
        });
        // 等待用戶按鈕選擇
      } else if (selectedValue === "星火同盟主線王室套裝") {
        const response = await interaction.reply({
          content: `
          主線任務：EP16.2 星火同盟
          前置任務要求：參觀EP 16.1【祝福儀式】
          等級要求：100等以上。
          需求物品：無。
          注意事項：無。
          `,
          components: [row],
        });
      } else if (selectedValue === "虛幻浮現主線幻象恩典套裝") {
        const response = await interaction.reply({
          content: `
          主線任務：EP 17.1 虛幻浮現主線
          前置任務要求：特拉 葛洛麗雅
          等級要求：110等以上。
          需求物品：無。
          注意事項：無。
          `,
          components: [row],
        });
      } else if (selectedValue === "賢者遺跡主線餐卷全自動套裝") {
        const response = await interaction.reply({
          content: `
          主線任務：EP17.2 賢者遺跡主線
          前置任務要求：EP 17.1 虛幻浮現主線
          等級要求：130等以上。
          需求物品：1.天地樹葉 1個 2.螢光色的液體 10個 3.破裂之劍 10個
          注意事項：無。
          `,
          components: [row],
        });
      } else if (selectedValue === "祈禱的方向灰狼套裝") {
        const response = await interaction.reply({
          content: `
          主線任務： EP18 祈禱的方向
          前置任務要求：EP17.2 主線-「消滅害蟲大作戰」完成
          等級要求：170等以上。
          需求物品：1.鋼鐵 3個 2.肉 1個 3.強韌木藤條 1個
          注意事項：無。
          `,
          components: [row],
        });
      }
      // 紀錄用戶選擇
      memory[0] = selectedValue;
    }
  });

  // 等待用戶按鈕選擇
  const buttonCollector = ctx.client.on(
    "interactionCreate",
    async (interaction) => {
      if (interaction.isButton()) {
        if (
          interaction.customId === "right" &&
          memory[0] === "七王主線貴族套裝"
        ) {
          await interaction.update({
            content: "https://www.youtube.com/watch?v=CZbDQH7NBGk",
            components: [indexMenu],
          });
        }
        if (
          interaction.customId === "right" &&
          memory[0] === "星火同盟主線王室套裝"
        ) {
          await interaction.update({
            content: "https://www.youtube.com/watch?v=CIeJg0L7dzY",
            components: [indexMenu],
          });
        }

        if (
          interaction.customId === "right" &&
          memory[0] === "虛幻浮現主線幻象恩典套裝"
        ) {
          await interaction.update({
            content: "https://www.youtube.com/watch?v=fDoBPpj7okc",
            components: [indexMenu],
          });
        }

        if (
          interaction.customId === "right" &&
          memory[0] === "賢者遺跡主線餐卷全自動套裝"
        ) {
          await interaction.update({
            content: "https://www.youtube.com/watch?v=se-ml0k4BQw",
            components: [indexMenu],
          });
        }

        if (
          interaction.customId === "right" &&
          memory[0] === "祈禱的方向灰狼套裝"
        ) {
          await interaction.update({
            content: "https://www.youtube.com/watch?v=ezkt-OV8_zI",
            components: [indexMenu],
          });
        }

        if (interaction.customId === "index") {
          await interaction.update({
            content: "請選擇想解的主線：",
            components: [{ type: 1, components: [selectMenu] }],
          });
        }
      }
    }
  );
};
