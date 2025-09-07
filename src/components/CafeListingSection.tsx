import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import CafeCard from "./CafeCard";
import { Search, Filter, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CafeListingSection = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Mock cafe data
  const cafes = [
    {
      id: "1",
      name: "Artisan Coffee Co.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      rating: 4.8,
      location: "Downtown District",
      specialty: "Artisan Lattes",
      openUntil: "9:00 PM",
      distance: "0.5 km",
      isOpen: true,
    },
    {
      id: "2",
      name: "The Roasted Bean",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      rating: 4.6,
      location: "Arts Quarter",
      specialty: "Single Origin",
      openUntil: "8:00 PM",
      distance: "1.2 km",
      isOpen: true,
    },
    {
      id: "3",
      name: "Café Lumière",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop",
      rating: 4.7,
      location: "Historic Center",
      specialty: "French Roast",
      openUntil: "10:00 PM",
      distance: "0.8 km",
      isOpen: true,
    },
    {
      id: "4",
      name: "Urban Grind",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      rating: 4.5,
      location: "Business District",
      specialty: "Cold Brew",
      openUntil: "6:00 PM",
      distance: "2.1 km",
      isOpen: false,
    },
    {
      id: "5",
      name: "Cozy Corner Café",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop",
      rating: 4.9,
      location: "Riverside",
      specialty: "Cappuccino",
      openUntil: "7:00 PM",
      distance: "1.5 km",
      isOpen: true,
    },
    {
      id: "6",
      name: "The Daily Grind",
      image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop",
      rating: 4.4,
      location: "University Area",
      specialty: "Espresso",
      openUntil: "11:00 PM",
      distance: "3.0 km",
      isOpen: true,
    },
  ];

  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cafe.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cafe.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === "all" ||
                         (filterType === "open" && cafe.isOpen) ||
                         (filterType === "nearby" && parseFloat(cafe.distance) <= 1.0);
    
    return matchesSearch && matchesFilter;
  });

  const handleBookTable = (cafeId: string) => {
    const cafe = cafes.find(c => c.id === cafeId);
    toast({
      title: "Table Booking",
      description: `Booking request sent for ${cafe?.name}. You'll receive a confirmation shortly.`,
    });
  };

  const handleRedeemDrink = (cafeId: string) => {
    const cafe = cafes.find(c => c.id === cafeId);
    toast({
      title: "Drink Redeemed! ☕",
      description: `Your daily drink at ${cafe?.name} is ready for pickup. Show this confirmation to the barista.`,
      duration: 5000,
    });
  };

  const filters = [
    { id: "all", label: "All Cafes", count: cafes.length },
    { id: "open", label: "Open Now", count: cafes.filter(c => c.isOpen).length },
    { id: "nearby", label: "Nearby", count: cafes.filter(c => parseFloat(c.distance) <= 1.0).length },
  ];

  return (
    <section id="cafes" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Discover Your Next
            <span className="gradient-hero bg-clip-text text-transparent block">
              Favorite Spot
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of partner cafes. Book tables, redeem drinks, 
            and discover new flavors across the city.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search cafes, locations, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 shadow-card border-0"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {filters.map(filter => (
                <Badge
                  key={filter.id}
                  variant={filterType === filter.id ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    filterType === filter.id ? "gradient-hero text-white" : ""
                  }`}
                  onClick={() => setFilterType(filter.id)}
                >
                  {filter.label} ({filter.count})
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {filteredCafes.length} {filteredCafes.length === 1 ? 'cafe' : 'cafes'} found
            </span>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Sorted by distance</span>
            </div>
          </div>
        </div>

        {/* Cafe grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map((cafe, index) => (
            <div 
              key={cafe.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CafeCard
                cafe={cafe}
                onBookTable={handleBookTable}
                onRedeemDrink={handleRedeemDrink}
              />
            </div>
          ))}
        </div>

        {filteredCafes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No cafes found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find more cafes.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setFilterType("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {filteredCafes.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="shadow-card hover:shadow-lg transition-all"
            >
              Load More Cafes
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CafeListingSection;