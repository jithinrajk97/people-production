import { Header } from "@/src/widgets/header";
import { HeroSection } from "@/src/widgets/hero-section";
import { Footer } from "@/src/widgets/footer";
import GlobalProviders from '../components/GlobalProviders';


export default function HomePage() {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <GlobalProviders>
        <Header />
        <main className="flex-grow">
          <HeroSection />
        </main>
        <Footer />
      </GlobalProviders>
    </div>
  );
}
