import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder().setName('屬性相剋表').setDescription('仙境傳說屬性相剋表');

export const action = async (ctx) =>{
    ctx.reply(
      "https://cdn.discordapp.com/attachments/1173797883481432134/1174550425119244390/RO.png"
    );
}
