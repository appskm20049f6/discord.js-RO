//官方資料改寫引入
import { Client, Events, GatewayIntentBits } from 'discord.js'
//引入另外一個特別的東西叫做detenv詳細的介紹我還沒看過 說起來是可以存取.env檔案
import detenv from 'dotenv'
detenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);