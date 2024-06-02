import Header from "./components/header/Header";
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
    </div>
  );
}

export default App;
