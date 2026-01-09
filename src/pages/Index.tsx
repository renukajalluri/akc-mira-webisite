import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, TreePine, Home, Waves, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link to="/location" className="text-green-700 hover:text-green-900 font-medium">Location</Link>
              <Link to="/contact" className="text-green-700 hover:text-green-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550978322-6a7449c96b93?w=1920&auto=format&fit=crop&q=80" 
            alt="Nature Farm Cottage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <img src="./images/mira_greens_logo_20260101_110727.png" alt="Mira Greens Nature Farms" className="h-20 w-20 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mira Greens Nature Farms
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Where Every Evening Feels Like a Holiday
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience luxury living in harmony with nature. Fully furnished 1BHK farm cottages with premium amenities and guaranteed investment returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link to="/cottages">Explore Cottages</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3">
              <Link to="/investment">Investment Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Mira Greens?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete package designed for maximum returns and hassle-free ownership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Fully Furnished</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ready-to-move 1BHK farm cottages with premium furnishing and modern amenities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Premium Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Swimming pool, games room, party deck, kids play area, and café</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Nature Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Surrounded by lush greenery and natural landscapes for peaceful living</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Investment Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Guaranteed returns with transparent pricing and flexible payment options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Highlight */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Investment & Returns</h2>
          <p className="text-xl mb-12">A transparent pricing model with guaranteed returns</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">₹3,00,000</h3>
              <p className="text-lg">Year 1 Returns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">₹1,00,000</h3>
              <p className="text-lg">Year 2 Returns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">₹1,00,000</h3>
              <p className="text-lg">Year 3 Returns</p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">All-Inclusive Price: ₹45,00,000</h3>
            <p className="text-lg mb-4">Booking starts at just ₹2,00,000</p>
            <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-2">
              5% Booking Amount
            </Badge>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">World-Class Amenities</h2>
            <p className="text-xl text-gray-600">Everything you need for a perfect getaway</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1586739807089-5f978d168cfa?w=400&auto=format&fit=crop&q=80" 
                alt="Swimming Pool" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Swimming Pool</h3>
                  <p>Refreshing infinity pool with lounging deck and sunset views</p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1758973470049-4514352776eb?w=400&auto=format&fit=crop&q=80" 
                alt="Indoor Games" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Indoor Games Room</h3>
                  <p>Pool table, foosball, carrom, and more for endless fun</p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1602362123045-e48b1cd88986?w=400&auto=format&fit=crop&q=80" 
                alt="Nature Landscape" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Lawn Party Space</h3>
                  <p>Expansive green lawns perfect for outdoor gatherings</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/amenities">View All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Invest in Your Future?</h2>
              <p className="text-xl mb-8">
                Contact our expert team to learn more about Mira Greens Nature Farms and secure your investment today.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">+91 78401 32200</p>
                    <p className="text-sm opacity-80">Office</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">+91 86608 35550</p>
                    <p className="text-sm opacity-80">Mobile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">info@akcdev.com</p>
                    <p className="text-sm opacity-80">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Saduvelly Village</p>
                    <p className="text-sm opacity-80">Yadadri District, Telangana</p>
                    <p className="text-xs opacity-70">Sy.No. 145, 146 & 185</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                ></textarea>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold">
                  Send Message
                </Button>
              </div>
            </div>
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
                <Link to="/cottages" className="block text-gray-400 hover:text-white">Cottages</Link>
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

export default Index;
