import { memo } from "react";
import { Header } from "@/src/widgets/header";
import { HeroSection } from "@/src/widgets/HomeBanner/HomeBanner";
import { Footer } from "@/src/widgets/footer";
import GlobalProviders from "../components/GlobalProviders";
import { HomeWorks } from "../widgets/hero-works";
import { HomeAbout } from "../widgets/home-about";
import { HomeInfo } from "@/src/widgets/HomeInfo/HomeInfo";
import { HomeSkill } from "@/src/widgets/HomeSkill/HomeSkill";

const HomePageContent = memo(function HomePageContent() {
  return (
    <>
      <HeroSection />
      <HomeInfo />
      <HomeWorks />
      <HomeSkill />
    </>
  );
});

export default function HomePage() {
  return (
    <div className="bg-white text-white flex flex-col min-h-screen">
      <GlobalProviders>
        <Header />
        <HomePageContent />
        <Footer />
      </GlobalProviders>
    </div>
  );
}
