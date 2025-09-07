import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Coffee, Calendar, MapPin } from "lucide-react";

const SubscriptionSection = () => {
  const features = [
    { icon: Coffee, text: "1 premium drink daily" },
    { icon: Calendar, text: "10 drinks per month" },
    { icon: MapPin, text: "50+ partner cafes" },
    { icon: Crown, text: "Priority table booking" },
  ];

  return (
    <section id="subscription" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Premium Cafe
            <span className="gradient-accent bg-clip-text text-transparent block">
              Membership
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Unlock unlimited access to premium drinks across our curated network of partner cafes. 
            One simple subscription, endless flavor possibilities.
          </p>
        </div>

        <div className="animate-scale-in">
          <Card className="shadow-card border-0 gradient-card max-w-lg mx-auto relative overflow-hidden">
            {/* Premium glow effect */}
            <div className="absolute inset-0 gradient-accent opacity-5" />
            
            <CardHeader className="relative pb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 gradient-accent rounded-full">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <CardTitle className="text-3xl font-bold text-center">
                Premium Plan
              </CardTitle>
              
              <div className="text-center">
                <div className="text-5xl font-bold gradient-hero bg-clip-text text-transparent">
                  $XX
                </div>
                <div className="text-muted-foreground">per month</div>
                <div className="text-sm text-accent font-medium mt-1">
                  Price coming soon
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
                  >
                    <div className="p-2 gradient-accent rounded-full">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                    <Check className="w-5 h-5 text-success ml-auto" />
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <Button 
                  size="lg" 
                  className="w-full gradient-hero text-white font-semibold py-4 text-lg shadow-hero hover:scale-105 transition-all duration-300 group"
                >
                  Buy Subscription
                  <Crown className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Start enjoying premium drinks at partner cafes today.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;