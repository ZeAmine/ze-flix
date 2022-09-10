import axios from "axios";

export const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.NEXT_OMDBAPI_KEY}`;

export const fetchAPI = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Data not fetched");
  }
};
