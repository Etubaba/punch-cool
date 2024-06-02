import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FaqSection from "./components/home/faq/FaqSection";
import HeroSection from "./components/home/hero/HeroSection";
import StartJourney from "./components/home/journeysection/StartJourney";
import BrandSection from "./components/home/marketplace/BrandSection";
import Reasons from "./components/home/reason-section/Reasons";
import HowItWork from "./components/home/section3/HowItWork";
import InGoodHands from "./components/home/section4/InGoodHands";

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <BrandSection />
      <HowItWork />
      <InGoodHands />
      <StartJourney />
      <Reasons />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
