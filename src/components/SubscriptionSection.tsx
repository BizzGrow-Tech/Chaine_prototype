// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Check, Crown, Coffee, Calendar, MapPin } from "lucide-react";

// const SubscriptionSection = () => {
//   const features = [
//     { icon: Coffee, text: "1 premium drink daily" },
//     { icon: Calendar, text: "10 drinks per month" },
//     { icon: MapPin, text: "50+ partner cafes" },
//     { icon: Crown, text: "Priority table booking" },
//   ];

//   return (
//     <section
//       id="subscription"
//       className="py-20 px-6 overflow-hidden relative bg-gray-50">
//       {/* Background blobs for modern, dynamic look */}
//       <div className="absolute inset-0 z-0 opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
//         <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
//       </div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         <div className="animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
//             Premium Cafe
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-800 block">
//               Membership
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//             Unlock unlimited access to premium drinks across our curated network
//             of partner cafes. One simple subscription, endless flavor
//             possibilities.
//           </p>
//         </div>

//         <div className="animate-scale-in">
//           <Card className="bg-white shadow-2xl shadow-gray-200 border border-gray-100 max-w-lg mx-auto relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 hover:scale-[1.02]">
//             <CardHeader className="relative pb-8">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg transform transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110">
//                   <Crown className="w-10 h-10 text-white" />
//                 </div>
//               </div>

//               <CardTitle className="text-4xl font-extrabold text-center text-gray-900">
//                 Premium Plan
//               </CardTitle>

//               <div className="text-center mt-4">
//                 <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-700 drop-shadow-md">
//                   $XX
//                 </div>
//                 <div className="text-gray-500 text-lg">per month</div>
//                 <div className="text-sm font-medium mt-2 text-yellow-500">
//                   Pricing to be announced soon
//                 </div>
//               </div>
//             </CardHeader>

//             <CardContent className="relative space-y-6">
//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-4 p-4 rounded-xl bg-gray-100 transition-all duration-300 transform hover:bg-gray-200 hover:scale-[1.02] hover:shadow-sm">
//                     <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
//                       <feature.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <span className="text-lg text-gray-800 font-medium">
//                       {feature.text}
//                     </span>
//                     <Check className="w-6 h-6 text-green-500 ml-auto" />
//                   </div>
//                 ))}
//               </div>

//               <div className="pt-6 border-t border-gray-200">
//                 <Button
//                   size="lg"
//                   className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-xl py-6 shadow-2xl shadow-orange-500/30 hover:scale-105 transition-all duration-300 group">
//                   Join the Club
//                   <Crown className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
//                 </Button>

//                 <p className="text-sm text-gray-500 mt-4 text-center">
//                   Start enjoying premium drinks at partner cafes today.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubscriptionSection;

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
    <section
      id="subscription"
      className="py-16 px-6 relative overflow-hidden bg-gray-50">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <div className="animate-fade-in mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Premium Cafe
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-800 block">
              Membership
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock unlimited access to premium drinks across our curated network
            of partner cafes. One simple subscription, endless flavor
            possibilities.
          </p>
        </div>

        {/* Subscription Card */}
        <div className="animate-scale-in">
          <Card className="max-w-lg mx-auto relative overflow-hidden border border-gray-100 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
            <CardHeader className="relative pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-md transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-105">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
                Premium Plan
              </CardTitle>

              <div className="mt-3 text-center">
                <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-700 drop-shadow-md">
                  $XX
                </div>
                <div className="text-gray-500 text-sm md:text-base mt-1">
                  per month
                </div>
                <div className="text-xs font-medium mt-1 text-yellow-500">
                  Pricing to be announced soon
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm transition-all duration-300 transform hover:bg-white/70 hover:scale-105 hover:shadow-md">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-sm">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm md:text-base text-gray-800 font-medium">
                      {feature.text}
                    </span>
                    <Check className="w-5 h-5 text-green-500 ml-auto" />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg py-4 shadow-md hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2 group">
                  Join the Club
                  <Crown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>

                <p className="text-xs md:text-sm text-gray-500 mt-3 text-center">
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
