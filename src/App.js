import { useState, useEffect } from "react";
import DownloadMessage from "./Component/DownloadMessage";
import Footer from "./Component/Footer";
import Hamburger from "./Component/Hamburger";
import Header from "./Component/Header";
import NewsContent from "./Component/NewsContent";

function App() {
  const key = process.env.REACT_APP_NEWS_API_KEY;
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const newsApi = async () => {
    const news = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`
    );
    const data = await news.json();
    setNewsArray(data.articles);
    setNewsResult(data.totalResults);
  };
  // newsApi();
  useEffect(() => {
    newsApi();
  }, [newsResult, category]);
  return (
    <>
      <div className="flex flex-col items-center">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Hamburger
          setCategory={setCategory}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
        <DownloadMessage />
        <NewsContent newsArray={newsArray} />
        <Footer />
      </div>
    </>
  );
}

export default App;
