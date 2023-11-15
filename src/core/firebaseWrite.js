import { getDatabase, ref, set, get } from "firebase/database";
import { FirebaseDB } from "./firebsaeDB.js";

const mapData = [
  {
    mapName: "新手期",
    lvMix: 1,
    lvMax: 100,
    url: "https://cdn.discordapp.com/attachments/1173797883481432134/1173797905098870885/image.png",
  },
  {
    mapName: "拉赫神殿",
    lvMix: 110,
    lvMax: 125,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173800066230800517/image.png",
  },
  {
    mapName: "龍巢穴2F~3F",
    lvMix: 125,
    lvMax: 150,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173800648093991012/image.png",
  },
  {
    mapName: "幻影海洞1F",
    lvMix: 140,
    lvMax: 155,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173801451416469504/image.png",
  },
  {
    mapName: "幻影龜島",
    lvMix: 150,
    lvMax: 170,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173803851984404580/image.png",
  },
  {
    mapName: "幻影螞蟻洞窟",
    lvMix: 160,
    lvMax: 170,
    url: "https://media.discordapp.net/attachments/1173805554074931220/1173831295533580298/image.png",
  },
  {
    mapName: "幻影迷藏森林",
    lvMix: 170,
    lvMax: 185,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173803925544124467/image.png",
  },
  {
    mapName: "幻影海洞2F",
    lvMix: 180,
    lvMax: 195,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173803976467169322/image.png",
  },
  {
    mapName: "奧丁神殿3",
    lvMix: 185,
    lvMax: 200,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173804011837726852/image.png",
  },
  {
    mapName: "湖水龍4",
    lvMix: 185,
    lvMax: 200,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173804156725776384/image.png",
  },
  {
    mapName: "死塔10F/12F",
    lvMix: 190,
    lvMax: 200,
    url: "https://media.discordapp.net/attachments/1173797883481432134/1173804055173275648/image.png",
  },
];

const writeData = async (mapName, lvMix, lvMax, url) => {
  for (let index = 0; index < mapData.length; index++) {
    const userRef = ref(FirebaseDB, `Ro練功地圖/${index}`);
    try {
      await set(userRef, [
        mapData[index].mapName,
        mapData[index].lvMix,
        mapData[index].lvMax,
        mapData[index].url,
      ]);
    } catch (error) {
      console.log("寫入資料時發生錯誤");
    }
  }
};
writeData();
