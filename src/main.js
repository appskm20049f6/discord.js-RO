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

// 在斷線時觸發
client.on('disconnect', (event) => {
    console.error(`已斷線，代碼：${event.code}, 原因：${event.reason}`);
    // 這裡可以執行重連邏輯
    setTimeout(() => {
      console.log('嘗試重新連線...');
      client.login(process.env.TOKEN);
    }, 5000); // 5 秒後重新連線
  });
  
  // 在錯誤時觸發
  client.on('error', (error) => {
    console.error('發生錯誤：', error);
  });


// Log in to Discord with your client's token
client.login(process.env.TOKEN);