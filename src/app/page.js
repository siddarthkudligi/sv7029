import HeroSection from "../components/HeroSection";
import MobileAppCTA from "../components/MobileAppCTA";
import ArticlesSection from "../components/ArticlesSection";
import InteractiveArticlesSection from "../components/InteractiveArticlesSection";
import ScriptureExplorerSection from "../components/ScriptureExplorerSection"; // Import the new component
import ForYouSection from "../components/ForYouSection"; // Import the ForYouSection
import SacredCollectionSection from "../components/SacredCollectionSection"; // Import the SacredCollectionSection

export default function Home() {
  return (
    // Removed items-center to allow full width
    <main className="flex min-h-screen flex-col justify-between">
      <div data-aos="fade-up" id="home"><HeroSection /></div>
      
      {/* <div data-aos="fade-up"><ArticlesSection /></div> */}
      {/* Removed data-aos from this wrapper */}
      <div id="articles"><InteractiveArticlesSection /></div> 
      <div data-aos="fade-up"><MobileAppCTA /></div>
      <div><ScriptureExplorerSection /></div> 
      <div id="scriptures"><SacredCollectionSection /></div> {/* Add SacredCollectionSection here */}
      <div data-aos="fade-up" id="for-you"><ForYouSection /></div> {/* ForYouSection is now last */}
    </main>
  );
}
