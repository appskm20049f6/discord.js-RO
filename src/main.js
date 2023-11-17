//官方資料改寫引入
import { Client, Events, GatewayIntentBits } from 'discord.js'
//引入VUE進行執行
import vueinit from "./core/vue";
//引入另外一個特別的東西叫做detenv詳細的介紹我還沒看過 說起來是可以存取.env檔案
import dotenv from "dotenv";

import { useAppstore } from "@/store/app";
import { loadCommands, loadEvents } from "./core/loader";
import axios from "axios";

//執行單位
vueinit();
dotenv.config();
loadCommands();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appStore = useAppstore();
appStore.client = client;

loadEvents();



// Log in to Discord with your client's token
client.login(process.env.TOKEN);