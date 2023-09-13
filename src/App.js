import { useState, useEffect } from "react"
import DownloadMessage from "./Component/DownloadMessage";
import Footer from "./Component/Footer";
import Hamburger from "./Component/HamburgerMenu/Hamburger";
import Header from "./Component/Header";
import NewsContent from "./Component/NewsContent";

function App() {
  const key = `49d1d651d12d465eaf4f9d22ba825954`
  // const YOUR_API_KEY = `pub_133669758107c20713122e5549c5d48621d00`
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(10);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const newsApi = async () => {
    // e.preventDefault();
    const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`)
    // const news = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
    // const news = await fetch(`https://newsdata.io/api/1/news?apikey=${YOUR_API_KEY}&category=${category}&country=in&language=en`)
    const data = await news.json()
    setNewsArray(data.articles);
    setNewsResult(data.totalResults)
  }
  // newsApi();
  useEffect(() => {
    newsApi();
  }, [newsResult, category, loadMore]);
  return (
    <>
      <div className="flex flex-col items-center">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Hamburger setCategory={setCategory} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <DownloadMessage />
        <NewsContent 
          setLoadMore={setLoadMore}
          loadMore={loadMore}
          newsArray={newsArray}
          newsResult={newsResult} />
        <Footer />
      </div>
    </>
  );
}

export default App;
