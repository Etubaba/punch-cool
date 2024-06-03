import HeroSection from "../components/home/hero/HeroSection";
import BrandSection from "../components/home/marketplace/BrandSection";
import HowItWork from "../components/home/section3/HowItWork";
import InGoodHands from "../components/home/section4/InGoodHands";
import StartJourney from "../components/home/journeysection/StartJourney";
import Reasons from "../components/home/reason-section/Reasons";
import FaqSection from "../components/home/faq/FaqSection";

function App() {
  return (
    <div>
      <HeroSection />
      <BrandSection />
      <HowItWork />
      <InGoodHands />
      <StartJourney />
      <Reasons />
      <FaqSection />
    </div>
  );
}

export default App;
