import axios from "axios";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=sjr9u7odKdSYJOuOntoRGgGgaunI3zPm&q=${category}&limit=10`;
  const resp = await axios(url);
  const { data } = await resp.data;
  // console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
