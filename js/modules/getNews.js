import createCards from "./createCards.js";

const getNews = async () => {
  try {
    const res = await fetch(
      "https://inshortsapi.vercel.app/news?category=technology"
    );
    const news = await res.json();
    createCards(news.data);
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
