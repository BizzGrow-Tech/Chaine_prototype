import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Coffee } from "lucide-react";

interface CafeCardProps {
  cafe: {
    id: string;
    name: string;
    image: string;
    rating: number;
    location: string;
    specialty: string;
    openUntil: string;
    distance: string;
    isOpen: boolean;
  };
  onBookTable: (cafeId: string) => void;
  onRedeemDrink: (cafeId: string) => void;
}

const CafeCard = ({ cafe, onBookTable, onRedeemDrink }: CafeCardProps) => {
  return (
    <Card className="shadow-card border-0 gradient-card hover:shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden">
      <div className="relative">
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant={cafe.isOpen ? "default" : "secondary"} 
            className={cafe.isOpen ? "bg-success text-white" : ""}
          >
            {cafe.isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {cafe.distance}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {cafe.name}
        </CardTitle>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{cafe.rating}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Until {cafe.openUntil}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{cafe.location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Coffee className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">Specialty: {cafe.specialty}</span>
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onBookTable(cafe.id)}
            className="flex-1 hover:bg-secondary transition-colors"
            disabled={!cafe.isOpen}
          >
            Book Table
          </Button>
          
          <Button
            size="sm"
            onClick={() => onRedeemDrink(cafe.id)}
            className="flex-1 gradient-hero text-white hover:scale-105 transition-all duration-200"
            disabled={!cafe.isOpen}
          >
            Redeem Drink
          </Button>
        </div>

        {!cafe.isOpen && (
          <p className="text-xs text-muted-foreground text-center">
            Available when open
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CafeCard;