import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder().setName('練等地圖').setDescription('幾等要去哪裡練，記得輸入自己的等級喔');

export const action = async (ctx,Lv) =>{
    if (Lv >= 1) {
     if (Lv >=1 && Lv <= 10) {
        ctx.reply('1-10');
     }
     if(Lv>=11 && Lv <= 20){
        ctx.reply('11-20');
     }


    }else{
        ctx.reply('請輸入你的等級喔！數字！');
    }

    
}
