import { Header } from "@/src/widgets/header";
import { HeroSection } from "@/src/widgets/HomeBanner/hero-section";
import { Footer } from "@/src/widgets/footer";
import GlobalProviders from "../components/GlobalProviders";
import { HomeWorks } from "../widgets/hero-works";
import { HomeAbout } from "../widgets/home-about";

export default function HomePage() {
  return (
    <div className="bg-white text-white flex flex-col min-h-screen">
      <GlobalProviders>
        <Header />
        <>
          <HeroSection />
        </>
        {/* <Footer /> */}
      </GlobalProviders>
    </div>
  );
}
