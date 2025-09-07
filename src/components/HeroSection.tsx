import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium coffee experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Coffee className="w-8 h-8 text-primary-glow opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6 text-accent-glow opacity-50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Coffee className="w-10 h-10 text-primary opacity-40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            One Drink.
            <span className="gradient-hero bg-clip-text text-transparent block">
              Every Day.
            </span>
            <span className="text-4xl md:text-5xl block mt-2 text-white/90">
              Endless Possibilities.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our premium cafe subscription and enjoy one free drink daily from our curated partner cafes. 
            Discover new flavors, book tables, and make every day delicious.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-hero text-white font-semibold px-8 py-4 text-lg shadow-hero hover:scale-105 transition-all duration-300 animate-pulse-glow group"
              onClick={() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => document.getElementById('cafes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Cafes
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">50+</div>
              <div className="text-sm">Partner Cafes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-glow">1</div>
              <div className="text-sm">Drink Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">10</div>
              <div className="text-sm">Per Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;