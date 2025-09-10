import HeroSection from "@/components/HeroSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import CafeListingSection from "@/components/CafeListingSection";
import CoffeeShopLandingPage from "@/components/HeroSection2";
import HomePage from "@/components/HeroSection3";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <HomePage /> */}
      <CoffeeShopLandingPage />
      {/* <HeroSection /> */}
      <SubscriptionSection />
      <CafeListingSection />
    </div>
  );
};

export default Index;
