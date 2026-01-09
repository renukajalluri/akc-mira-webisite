import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Gamepad2, Users, Baby, Coffee, Car, Wifi, Shield, TreePine, Dumbbell, Music, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const Amenities = () => {
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
              <Link to="/amenities" className="text-green-900 font-bold border-b-2 border-green-600">Amenities</Link>
              <Link to="/investment" className="text-green-700 hover:text-green-900 font-medium">Investment</Link>
              <Link to="/location" className="text-green-700 hover:text-green-900 font-medium">Location</Link>
              <Link to="/contact" className="text-green-700 hover:text-green-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586739807089-5f978d168cfa?w=1920&auto=format&fit=crop&q=80" 
            alt="Swimming Pool" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            World-Class Amenities
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Everything You Need for the Perfect Getaway
          </p>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Premium Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy resort-style amenities designed for relaxation, recreation, and memorable experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Swimming Pool */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1586739807089-5f978d168cfa?w=600&auto=format&fit=crop&q=80" 
                alt="Swimming Pool" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Waves className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">Swimming Pool</h3>
                  </div>
                  <p className="text-lg mb-4">Refreshing infinity pool with lounging deck and sunset views</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-500">Infinity Design</Badge>
                    <Badge className="bg-blue-500">Poolside Seating</Badge>
                    <Badge className="bg-blue-500">Night Lighting</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Indoor Games */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1758973470049-4514352776eb?w=600&auto=format&fit=crop&q=80" 
                alt="Indoor Games Room" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Gamepad2 className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">Indoor Games Room</h3>
                  </div>
                  <p className="text-lg mb-4">Pool table, foosball, carrom, and more for endless fun</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-500">Pool Table</Badge>
                    <Badge className="bg-purple-500">Foosball</Badge>
                    <Badge className="bg-purple-500">Carrom Board</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle className="text-green-800">Lawn Party Space</CardTitle>
                    <CardDescription>Outdoor Events</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1602362123045-e48b1cd88986?w=300&auto=format&fit=crop&q=80" 
                  alt="Lawn Party Space" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Expansive green lawns perfect for outdoor gatherings, celebrations, and events</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Open Air</Badge>
                  <Badge variant="outline" className="text-xs">Event Setup</Badge>
                  <Badge variant="outline" className="text-xs">Green Lawns</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Music className="h-8 w-8 text-purple-600" />
                  <div>
                    <CardTitle className="text-green-800">Party Deck</CardTitle>
                    <CardDescription>Entertainment Zone</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1722480417258-62f2fe681219?w=300&auto=format&fit=crop&q=80" 
                  alt="Party Deck" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Open-air party space with modern lighting and sound system for celebrations</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Sound System</Badge>
                  <Badge variant="outline" className="text-xs">LED Lighting</Badge>
                  <Badge variant="outline" className="text-xs">Dance Floor</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Baby className="h-8 w-8 text-yellow-600" />
                  <div>
                    <CardTitle className="text-green-800">Kids Play Area</CardTitle>
                    <CardDescription>Family Fun</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1759050429677-52307a5b6ec1?w=300&auto=format&fit=crop&q=80" 
                  alt="Kids Play Area" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Safe and colorful playground equipment for children of all ages</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Safe Equipment</Badge>
                  <Badge variant="outline" className="text-xs">Age Appropriate</Badge>
                  <Badge variant="outline" className="text-xs">Supervised</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-8 w-8 text-orange-600" />
                  <div>
                    <CardTitle className="text-green-800">Café & Juice Bar</CardTitle>
                    <CardDescription>Refreshments</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1722480417283-51eb0a881b54?w=300&auto=format&fit=crop&q=80" 
                  alt="Café & Juice Bar" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Fresh juices, snacks, and beverages served by the poolside</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Fresh Juices</Badge>
                  <Badge variant="outline" className="text-xs">Snacks</Badge>
                  <Badge variant="outline" className="text-xs">Poolside Service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Dumbbell className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle className="text-green-800">Fitness Center</CardTitle>
                    <CardDescription>Health & Wellness</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1758194403577-a9e4dbfbade1?w=300&auto=format&fit=crop&q=80" 
                  alt="Fitness Center" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Modern gym equipment and yoga space for your fitness routine</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Gym Equipment</Badge>
                  <Badge variant="outline" className="text-xs">Yoga Space</Badge>
                  <Badge variant="outline" className="text-xs">Wellness</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TreePine className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle className="text-green-800">Nature Trails</CardTitle>
                    <CardDescription>Outdoor Activities</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1667900736521-aad930fb4149?w=300&auto=format&fit=crop&q=80" 
                  alt="Nature Trails" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-3">Scenic walking trails through lush greenery and natural landscapes</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Walking Trails</Badge>
                  <Badge variant="outline" className="text-xs">Nature Views</Badge>
                  <Badge variant="outline" className="text-xs">Bird Watching</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Essential Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Essential Services</h2>
            <p className="text-xl text-gray-600">Comprehensive facilities for your comfort and convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">24/7 Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock security with CCTV surveillance and trained personnel</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Parking Facility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dedicated parking spaces for each cottage with visitor parking area</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wifi className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">High-Speed WiFi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complimentary high-speed internet connectivity throughout the property</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Housekeeping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Regular housekeeping and maintenance services for hassle-free stays</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Development Timeline</h2>
            <p className="text-xl text-gray-600">Phased development ensuring quality and timely delivery</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-green-800">Phase 1 - Core Infrastructure</h3>
                  <p className="text-gray-600">Swimming pool, clubhouse, and basic amenities</p>
                  <Badge className="bg-green-500 text-white mt-2">Completed</Badge>
                </div>
                <div className="w-4 h-4 bg-green-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-green-800">Phase 2 - Recreation Facilities</h3>
                  <p className="text-gray-600">Games room, party deck, and kids play area</p>
                  <Badge className="bg-blue-500 text-white mt-2">In Progress</Badge>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-green-800">Phase 3 - Wellness & Nature</h3>
                  <p className="text-gray-600">Fitness center, spa, and nature trails</p>
                  <Badge className="bg-yellow-500 text-white mt-2">Upcoming</Badge>
                </div>
                <div className="w-4 h-4 bg-yellow-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-green-800">Phase 4 - Premium Services</h3>
                  <p className="text-gray-600">Concierge services, event management, and premium dining</p>
                  <Badge className="bg-purple-500 text-white mt-2">Planned</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Comparison */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Amenities?</h2>
            <p className="text-xl opacity-90">Compare with other farm house projects in the region</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Standard Projects</h3>
              <ul className="space-y-2 text-left">
                <li>• Basic swimming pool</li>
                <li>• Limited parking</li>
                <li>• Basic security</li>
                <li>• No recreational facilities</li>
                <li>• Minimal landscaping</li>
              </ul>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center border-2 border-yellow-400">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4">Mira Greens</Badge>
              <h3 className="text-2xl font-bold mb-4">Premium Experience</h3>
              <ul className="space-y-2 text-left">
                <li>• Infinity swimming pool</li>
                <li>• Dedicated parking per cottage</li>
                <li>• 24/7 professional security</li>
                <li>• Multiple recreation zones</li>
                <li>• Landscaped gardens & trails</li>
                <li>• Café & juice bar</li>
                <li>• Indoor games room</li>
                <li>• Kids play area</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Luxury Resorts</h3>
              <ul className="space-y-2 text-left">
                <li>• Premium amenities</li>
                <li>• High maintenance costs</li>
                <li>• No ownership benefits</li>
                <li>• Booking limitations</li>
                <li>• Expensive daily rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Experience Luxury Living</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a site visit to experience our world-class amenities firsthand
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link to="/contact">Schedule Site Visit</Link>
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold px-8 py-3">
              <Link to="/investment">View Investment Plans</Link>
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
                <Link to="/investment" className="block text-gray-400 hover:text-white">Investment</Link>
                <Link to="/location" className="block text-gray-400 hover:text-white">Location</Link>
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

export default Amenities;