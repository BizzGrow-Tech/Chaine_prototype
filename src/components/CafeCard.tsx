import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Coffee } from "lucide-react";
import { Mail, Phone, User, Users, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  onRedeemDrink: (cafeId: string) => void;
}

const CafeCard = ({ cafe, onRedeemDrink }: CafeCardProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");

  const handleBooking = () => {
    if (!name || !email || !phone || !date) {
      alert("Please fill all fields.");
      return;
    }
    alert(`Booking confirmed for ${guests} guests at ${cafe.name} on ${date}.`);
  };

  return (
    <Card className="relative overflow-hidden rounded-xl border border-white/20 shadow-md backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl group">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${cafe.image})` }}>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        <div className="flex justify-between items-start mb-24">
          <Badge
            className={
              cafe.isOpen
                ? "bg-green-500/80 backdrop-blur-sm text-white border-none"
                : "bg-gray-700/80 backdrop-blur-sm text-gray-200 border-none"
            }>
            {cafe.isOpen ? "Open" : "Closed"}
          </Badge>
          <Badge className="bg-white/40 backdrop-blur-sm text-white border-none">
            {cafe.distance}
          </Badge>
        </div>

        <div>
          <CardTitle className="text-3xl font-bold mb-1 drop-shadow-lg group-hover:text-amber-300 transition-colors">
            {cafe.name}
          </CardTitle>

          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span className="font-medium">{cafe.rating}</span>
            <span className="mx-2">•</span>
            <MapPin className="w-4 h-4" />
            <span>{cafe.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm mt-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span>Until {cafe.openUntil}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm mt-1 text-gray-300">
            <Coffee className="w-4 h-4 text-amber-300" />
            <span className="font-semibold">Specialty: {cafe.specialty}</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-6">
            {/* Dialog for booking */}

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!cafe.isOpen}
                  className="flex-1 border border-gray-300 text-gray-800 hover:bg-gray-100 disabled:text-gray-400">
                  Book Table
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md bg-white rounded-xl shadow-xl p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-gray-900">
                    Book a Table
                  </DialogTitle>
                  <p className="text-sm text-gray-500">
                    Reserve your spot at{" "}
                    <span className="font-medium">{cafe.name}</span>.
                  </p>
                </DialogHeader>

                <div className="space-y-5 mt-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="pl-10 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="pl-10 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="pl-10 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Guests + Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-gray-700">
                        Guests
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="pl-10 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-gray-700">
                        Date
                      </Label>
                      <div className="relative">
                        <Input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="pl-3 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Confirm Button */}
                  <Button
                    onClick={handleBooking}
                    className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-colors">
                    Confirm Booking
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              size="sm"
              onClick={() => onRedeemDrink(cafe.id)}
              disabled={!cafe.isOpen}
              className="flex-1 bg-gradient-to-br from-amber-400 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl">
              Redeem Drink
            </Button>
          </div>

          {!cafe.isOpen && (
            <p className="text-xs text-gray-400 text-center mt-3">
              Available when open
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CafeCard;
