import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Home, Bed, Bath, Square, Wifi, Car, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const Cottages = () => {
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
              <Link to="/cottages" className="text-green-900 font-bold border-b-2 border-green-600">Cottages</Link>
              <Link to="/amenities" className="text-green-700 hover:text-green-900 font-medium">Amenities</Link>
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
            src="https://images.unsplash.com/photo-1605152290439-6f0620b3815a?w=1920&auto=format&fit=crop&q=80" 
            alt="Farm Cottage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Fully Furnished Farm Cottages
          </h1>
          <p className="text-xl md:text-2xl font-light">
            1BHK Premium Cottages Ready for Your Perfect Getaway
          </p>
        </div>
      </section>

      {/* Cottage Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Cottage Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each cottage is thoughtfully designed with modern amenities and premium furnishing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550978322-6a7449c96b93?w=600&auto=format&fit=crop&q=80" 
                alt="Cottage Exterior" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">1BHK Farm Cottage</h3>
              <p className="text-lg text-gray-600 mb-8">
                Experience luxury living in our fully furnished 1BHK farm cottages. Each unit is designed 
                to provide maximum comfort while maintaining harmony with the natural surroundings.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Square className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">530 Sq Ft</p>
                    <p className="text-sm text-gray-600">Built-up Area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bed className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">1 Bedroom</p>
                    <p className="text-sm text-gray-600">Spacious & Airy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">1 Bathroom</p>
                    <p className="text-sm text-gray-600">Modern Fittings</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Living Area</p>
                    <p className="text-sm text-gray-600">Open Layout</p>
                  </div>
                </div>
              </div>
              
              <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                Fully Furnished & Ready to Move
              </Badge>
            </div>
          </div>

          {/* Floor Plans */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">Available Floor Plans</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">East Facing - 27x50</CardTitle>
                  <CardDescription>Optimal morning sunlight</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Floor Plan Preview</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Plot Size:</strong> 27' x 50'</p>
                    <p><strong>Built-up:</strong> 530 Sq Ft</p>
                    <p><strong>Orientation:</strong> East Facing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">East Facing - 30x45</CardTitle>
                  <CardDescription>Compact & efficient design</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Floor Plan Preview</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Plot Size:</strong> 30' x 45'</p>
                    <p><strong>Built-up:</strong> 530 Sq Ft</p>
                    <p><strong>Orientation:</strong> East Facing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">West Facing - 27x50</CardTitle>
                  <CardDescription>Beautiful evening views</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Floor Plan Preview</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Plot Size:</strong> 27' x 50'</p>
                    <p><strong>Built-up:</strong> 530 Sq Ft</p>
                    <p><strong>Orientation:</strong> West Facing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features & Amenities */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Cottage Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Premium modular kitchen with modern appliances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Spacious bedroom with built-in wardrobes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Modern bathroom with premium fittings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Living area with comfortable seating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Private balcony with nature views</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Air conditioning and ceiling fans</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Included Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-green-600" />
                  <span>High-Speed WiFi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-green-600" />
                  <span>Parking Space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TreePine className="h-5 w-5 text-green-600" />
                  <span>Garden Area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-green-600" />
                  <span>24/7 Security</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-bold text-green-800 mb-4">What's Included</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete furniture package</li>
                  <li>• Kitchen appliances & utensils</li>
                  <li>• Bed, mattress & linens</li>
                  <li>• Dining table & chairs</li>
                  <li>• TV & entertainment system</li>
                  <li>• Basic maintenance for 1 year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Cottage Gallery</h2>
            <p className="text-xl text-gray-600">Take a virtual tour of our beautiful cottages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1703570759663-d66a1552f357?w=400&auto=format&fit=crop&q=80" 
                alt="Cottage Village View" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1680718349543-2016f3e618cd?w=400&auto=format&fit=crop&q=80" 
                alt="Cottage with Nature" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1685856060204-6942241e6b71?w=400&auto=format&fit=crop&q=80" 
                alt="Farm House Setting" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1744488340684-2b86590c15dd?w=400&auto=format&fit=crop&q=80" 
                alt="Autumn Farm Scene" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1603718089842-da833e33c203?w=400&auto=format&fit=crop&q=80" 
                alt="Cottage Interior" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1685524889561-f02f38d3f150?w=400&auto=format&fit=crop&q=80" 
                alt="Traditional Architecture" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Own Your Dream Cottage?</h2>
          <p className="text-xl mb-8">
            Book your fully furnished 1BHK farm cottage today and start enjoying the perfect blend of luxury and nature.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold px-8 py-3">
              <Link to="/investment">View Investment Plans</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3">
              <Link to="/contact">Schedule Site Visit</Link>
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
                <Link to="/amenities" className="block text-gray-400 hover:text-white">Amenities</Link>
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

export default Cottages;