import { Header } from "@/src/widgets/header";
import { HeroSection } from "@/src/widgets/hero-section";
import { Footer } from "@/src/widgets/footer";
import GlobalProviders from "../components/GlobalProviders";
import { HomeWorks } from "../widgets/hero-works";
import { HomeAbout } from "../widgets/home-about";

export default function HomePage() {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <GlobalProviders>
        <Header />
        <>
          <HeroSection />
          <HomeWorks />
          <HomeAbout />
        </>
        <Footer />
      </GlobalProviders>
    </div>
  );
}
