import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
} from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("練等地圖哪裡去")
  .setDescription("資料來源巴哈新手精華區");

export const action = async (ctx) => {
  // 建立選擇單選單
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId("LVmapSelectMenu")
    .setPlaceholder("選擇地圖or等級區間")
    .addOptions([
      new StringSelectMenuOptionBuilder()
        .setLabel("110等以下(含剛三轉新手期)")
        .setValue("新手期"),
      new StringSelectMenuOptionBuilder()
        .setLabel("拉赫神殿 110~125")
        .setValue("拉赫神殿"),
      new StringSelectMenuOptionBuilder()
        .setLabel("龍巢穴2F-3F 125~150")
        .setValue("龍巢穴"),
      new StringSelectMenuOptionBuilder()
        .setLabel("幻影海洞1F 140~155")
        .setValue("海1"),
      new StringSelectMenuOptionBuilder()
        .setLabel("幻影龜島 150~170")
        .setValue("幻影龜島"),
      new StringSelectMenuOptionBuilder()
        .setLabel("幻影螞蟻洞窟 160~175")
        .setValue("幻影螞蟻洞窟"),
      new StringSelectMenuOptionBuilder()
        .setLabel("幻影迷藏森林 170~185")
        .setValue("幻影迷藏森林"),
      new StringSelectMenuOptionBuilder()
        .setLabel("幻影海洞2F 180~195")
        .setValue("海2"),
      new StringSelectMenuOptionBuilder()
        .setLabel("奧丁神殿3 185~200")
        .setValue("奧丁神殿3"),
      new StringSelectMenuOptionBuilder()
        .setLabel("湖水龍4 190~200")
        .setValue("龍4"),
      new StringSelectMenuOptionBuilder()
        .setLabel("死塔10F/12F 185~200")
        .setValue("死塔10F/12F"),
    ]);

  // 使用 ctx.reply() 回覆消息並包含選擇單選單
  await ctx.reply({
    content: "請選擇等級區間：",
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

      if (selectedValue === "新手期") {
        await interaction.reply(
          "https://cdn.discordapp.com/attachments/1173797883481432134/1173797905098870885/image.png"
        );
      } else if (selectedValue === "拉赫神殿") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173800066230800517/image.png?ex=6565457f&is=6552d07f&hm=140ce5e6e59a56ff28a18aa84d7ca4a20aaeeede6eb80a03b686b4ce4dcccefb&=&width=982&height=569"
        );
      } else if (selectedValue === "龍巢穴") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173800648093991012/image.png?ex=6565460a&is=6552d10a&hm=0b9f03d678c00a5626ce8c7d4e143063750280840d032ec6c057b352cd9b77aa&=&width=1112&height=569"
        );
      } else if (selectedValue === "海1") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173801451416469504/image.png?ex=656546ca&is=6552d1ca&hm=5b2cefd1ce533f45ef36404ce5e9f17bef68d9300a5378a4a314e6c00870347b&=&width=718&height=569"
        );
      } else if (selectedValue === "幻影龜島") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173803851984404580/image.png?ex=65654906&is=6552d406&hm=e6409b4d06a63bf73ec05c18ea8e26ab7dd692c2909fd5fac2c47eb139d783b5&=&width=658&height=569"
        );
      } else if (selectedValue === "幻影螞蟻洞窟") {
        await interaction.reply(
          "https://www.ptt.cc/bbs/RO/M.1678196393.A.D27.html"
        );
      } else if (selectedValue === "幻影迷藏森林") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173803925544124467/image.png?ex=65654918&is=6552d418&hm=281ebd9ec9c055f532a5401e41d25e1d9c618751fbcbe482681f9e4dc3e1b09e&=&width=502&height=569"
        );
      } else if (selectedValue === " 海2") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173803976467169322/image.png?ex=65654924&is=6552d424&hm=35e20362c913f48bd2aeeb47c69ac89001bc752dbf0d9e0d7a862662ac0bfe92&="
        );
      } else if (selectedValue === "奧丁神殿3") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173804011837726852/image.png?ex=6565492c&is=6552d42c&hm=72290e9c6eda23039ccc04e4bfe39dab59a198f41433f66f7c4f02d59555b2cc&=&width=1229&height=491"
        );
      } else if (selectedValue === "龍4") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173804055173275648/image.png?ex=65654936&is=6552d436&hm=2b7bf208bf260c7da8b0843cecf0309b0eb4aa5939029f7c0c4ffe817b75829e&=&width=1047&height=569"
        );
      } else if (selectedValue === "死塔10F/12F") {
        await interaction.reply(
          "https://media.discordapp.net/attachments/1173797883481432134/1173804156725776384/image.png?ex=6565494f&is=6552d44f&hm=e2c7d194d2da19db9510b675a36ab011064bedefee7825f5667d53001d8b2d68&=&width=499&height=569"
        );
      }

      collector.removeAllListeners(); // 移除事件監聽器
      console.log(selectedValue);
    }
  });
};
