import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder().setName('屬性相剋表').setDescription('仙境傳說屬性相剋表');

export const action = async (ctx) =>{
    ctx.reply('https://media.discordapp.net/attachments/854047298728493057/1172415772472115270/image.png');
}
