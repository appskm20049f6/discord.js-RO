import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiUrl = `https://sheetdb.io/api/v1/${process.env.GOOGLE_SHEETDB}`;

export const sheet_data = axios.get(apiUrl).then((res) => {
  return res.data;
});
