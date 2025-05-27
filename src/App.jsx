import "./App.css";
import Carousel from "../components/Carousel";
import PopularToday from "../components/PopularToday";
import SpotlightCarousel from "../components/SpotlightCarousel";
import Header from "../components/Header";
import PopularNovels from "../components/PopularNovels";
// import TrendingSection from "../components/Trending";
import TrendingSection from "../components/TrendingSection";
import RecentUpdates from "../components/RecentUpdates";
import Footer from "../components/Footer";

function App() {
  return (
    <main className="bg-[#06111f] ">
    <Header />

<section className="flex flex-col md:flex-row gap-2 justify-center">


    <section className="main-section">
          <SpotlightCarousel />
      {/* <Carousel /> */}
      {/* <PopularToday />
       */}
       <TrendingSection />
       <RecentUpdates />
       

    </section>

    <section className="popular-section">

      <PopularNovels />
    </section>
    
</section>

<Footer />

    </main>
  );
}

export default App;
