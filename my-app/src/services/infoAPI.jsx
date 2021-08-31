import axios from "axios";

const API_KEY = "JfJbqjpYM8YJjsu2iANpCccBA7a210Eek1tzhzau";
const BASE_API_URL =
  "https://developer.nps.gov/api/v1/parks?&limit=100&fields=images";

const API = {
  get: async (state) => {
    const path = BASE_API_URL + "&stateCode=" + state + "&api_key=" + API_KEY;
    console.log(path);
    const res = await axios.get(path);

    return res.data.data;
  },
};

export default API;
