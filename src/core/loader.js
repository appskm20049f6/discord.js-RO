import { Guild, REST, Routes } from 'discord.js'
import fg, { async } from 'fast-glob'

const GUILD_ID = ['331999259325104138','758683931070824460']
//用來更新上傳斜線指令用的
const updateSlash=(GUILD_ID)=>{
    const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

    rest.put
    (Routes.applicationGuildCommands(process.env.APPLICATION_ID, GUILD_ID,))
    ,
    {
        body: [],
    }

}

export const loadCommands= async()=>{
    const files = await fg('./src/commands/**/index.js')
    console.log(files);
}