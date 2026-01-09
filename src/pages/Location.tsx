import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Car, Plane, Train, Building, TreePine, Mountain, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src="./images/akc_logo_20260101_110726.png" alt="AKC Developers" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-green-800">AKC Developers</h1>
                <p className="text-sm text-green-600">Premium Nature Developments</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-700 hover:text-green-900 font-medium">Home</Link>
              <Link to="/cottages" className="text-green-700 hover:text-green-900 font-medium">Cottages</Link>
              <Link to="/amenities" className="text-green-700 hover:text-green-900 font-medium">Amenities</Link>
              <Link to="/investment" className="text-green-700 hover:text-green-900 font-medium">Investment</Link>
              <Link to="/location" className="text-green-900 font-bold border-b-2 border-green-600">Location</Link>
              <Link to="/contact" className="text-green-700 hover:text-green-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/maps.jpg" 
            alt="Location Map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Prime Location
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Saduvelly Village, Yadadri District, Telangana
          </p>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Strategic Location Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfectly positioned for growth, connectivity, and natural beauty in the heart of Telangana
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Saduvelly Village</h3>
              <p className="text-lg text-gray-600 mb-6">
                Located in the rapidly developing Yadadri District, our project sits in the serene Saduvelly Village, 
                offering the perfect blend of rural tranquility and urban accessibility.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Survey Numbers</h4>
                    <p className="text-gray-600">Sy.No. 145, 146 & 185, Saduvelly Village</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Approvals</h4>
                    <p className="text-gray-600">Grampanchayat Approved Layout with NALA Conversion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Environment</h4>
                    <p className="text-gray-600">Surrounded by lush greenery and natural landscapes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Location Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">District</span>
                  <Badge className="bg-green-100 text-green-800">Yadadri Bhuvanagiri</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">State</span>
                  <Badge className="bg-blue-100 text-blue-800">Telangana</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Nearest City</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Hyderabad</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Development Zone</span>
                  <Badge className="bg-purple-100 text-purple-800">Emerging Growth Corridor</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Excellent Connectivity</h2>
            <p className="text-xl text-gray-600">Easy access to major cities and transportation hubs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Road Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Hyderabad</span>
                    <Badge>90 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Warangal</span>
                    <Badge>60 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bhuvanagiri</span>
                    <Badge>30 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Regional Ring Road</span>
                    <Badge>45 mins</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Airport Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Rajiv Gandhi International Airport</span>
                    <Badge>90 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Warangal Airport</span>
                    <Badge>75 mins</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Direct connectivity to major domestic and international destinations
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Train className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Railway Stations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Bhuvanagiri Railway Station</span>
                    <Badge>25 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Warangal Junction</span>
                    <Badge>60 mins</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Secunderabad Junction</span>
                    <Badge>90 mins</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Nearby Attractions & Landmarks</h2>
            <p className="text-xl text-gray-600">Rich cultural heritage and natural beauty all around</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mountain className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-green-800">Yadadri Temple</CardTitle>
                <CardDescription>Famous Lakshmi Narasimha Temple</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-orange-100 text-orange-800">25 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  One of Telangana's most revered temples, attracting millions of devotees annually
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-green-800">Bhuvanagiri Fort</CardTitle>
                <CardDescription>Historical Monument</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-blue-100 text-blue-800">20 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Asia's monolithic mountain fort with rich historical significance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Pocharam Wildlife Sanctuary</CardTitle>
                <CardDescription>Nature Reserve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-green-100 text-green-800">35 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Rich biodiversity with various species of flora and fauna
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Waves className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-green-800">Kolanupaka Jain Temple</CardTitle>
                <CardDescription>Ancient Temple Complex</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-blue-100 text-blue-800">40 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  2000-year-old Jain temple with exquisite architecture
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mountain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-green-800">Thousand Pillar Temple</CardTitle>
                <CardDescription>Warangal Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-purple-100 text-purple-800">60 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  UNESCO World Heritage site with stunning Kakatiya architecture
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-green-800">Ramappa Temple</CardTitle>
                <CardDescription>World Heritage Site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Distance</span>
                  <Badge className="bg-teal-100 text-teal-800">80 km</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  13th-century temple known for its floating bricks and intricate carvings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Development Projects</h2>
            <p className="text-xl opacity-90">Infrastructure growth driving property appreciation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Regional Ring Road (RRR)</h3>
              <p className="opacity-90 mb-3">Major connectivity project linking all districts</p>
              <Badge className="bg-yellow-500 text-yellow-900">Under Construction</Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Warangal IT Corridor</h3>
              <p className="opacity-90 mb-3">IT hub development along Warangal Highway</p>
              <Badge className="bg-blue-500 text-blue-900">Planned</Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Yadadri Temple City</h3>
              <p className="opacity-90 mb-3">Comprehensive temple town development</p>
              <Badge className="bg-green-500 text-green-900">Ongoing</Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">MMTS Extension</h3>
              <p className="opacity-90 mb-3">Multi-Modal Transport System expansion</p>
              <Badge className="bg-purple-500 text-purple-900">Approved</Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">India's Largest Ropeway</h3>
              <p className="opacity-90 mb-3">Connecting Yadadri temple to surrounding areas</p>
              <Badge className="bg-orange-500 text-orange-900">Under Development</Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Brundavan Gardens</h3>
              <p className="opacity-90 mb-3">Landscaped gardens around Yadadri</p>
              <Badge className="bg-teal-500 text-teal-900">Phase 1 Complete</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Interactive Location Map</h2>
            <p className="text-xl text-gray-600">Explore the area and plan your visit</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="./images/maps.jpg" 
                alt="Detailed Location Map" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">How to Reach</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-green-800">From Hyderabad</h4>
                    <p className="text-gray-600">Take NH163 towards Warangal, exit at Bhuvanagiri and follow signs to Saduvelly Village</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-green-800">From Warangal</h4>
                    <p className="text-gray-600">Take SH1 towards Bhuvanagiri, then local roads to Saduvelly Village</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Public Transport</h4>
                    <p className="text-gray-600">Regular bus services available from Hyderabad and Warangal to Bhuvanagiri</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-800 mb-4">GPS Coordinates</h4>
                <p className="text-gray-700">
                  <strong>Latitude:</strong> 17.4065° N<br />
                  <strong>Longitude:</strong> 79.4530° E
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Location Yourself</h2>
          <p className="text-xl mb-8">
            Schedule a site visit to see why Mira Greens Nature Farms is the perfect investment destination
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold px-8 py-3">
              <Link to="/contact">Schedule Site Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="./images/akc_logo_20260101_110726.png" alt="AKC Developers" className="h-8 w-8" />
                <h3 className="text-xl font-bold">AKC Developers</h3>
              </div>
              <p className="text-gray-400">
                Creating premium nature developments that blend luxury with sustainability.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
                <Link to="/cottages" className="block text-gray-400 hover:text-white">Cottages</Link>
                <Link to="/amenities" className="block text-gray-400 hover:text-white">Amenities</Link>
                <Link to="/investment" className="block text-gray-400 hover:text-white">Investment</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Saduvelly Village, Yadadri District</p>
                <p>Telangana, India</p>
                <p>Phone: +91 78401 32200</p>
                <p>Email: info@akcdev.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AKC Developers. All rights reserved. | Mira Greens Nature Farms</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Location;