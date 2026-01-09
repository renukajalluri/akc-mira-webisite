import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Calculator, Shield, Clock, IndianRupee, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Investment = () => {
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
              <Link to="/investment" className="text-green-900 font-bold border-b-2 border-green-600">Investment</Link>
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
            src="https://images.unsplash.com/photo-1560850006-5837212e620b?w=1920&auto=format&fit=crop&q=80" 
            alt="Investment Growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Investment & Returns
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Transparent Pricing with Guaranteed Returns
          </p>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Investment Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete package designed for maximum returns and hassle-free ownership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg mb-8">
                <h3 className="text-3xl font-bold mb-4">Total Investment</h3>
                <div className="text-5xl font-bold mb-2">₹45,00,000</div>
                <p className="text-xl opacity-90">All-Inclusive Price</p>
                <Badge className="bg-yellow-500 text-yellow-900 mt-4 text-lg px-4 py-2">
                  Booking starts at just ₹2,00,000
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold">Booking Amount (5%)</span>
                  <span className="text-green-800 font-bold">₹2,25,000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold">Agreement (20%)</span>
                  <span className="text-green-800 font-bold">₹9,00,000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold">Construction Milestones</span>
                  <span className="text-green-800 font-bold">₹33,75,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Guaranteed Returns</h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-green-600">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Year 1 Returns</span>
                      <span className="text-2xl font-bold text-green-600">₹3,00,000</span>
                    </CardTitle>
                    <CardDescription>6.67% Annual Return</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-blue-600">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Year 2 Returns</span>
                      <span className="text-2xl font-bold text-blue-600">₹1,00,000</span>
                    </CardTitle>
                    <CardDescription>2.22% Annual Return</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-yellow-600">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Year 3 Returns</span>
                      <span className="text-2xl font-bold text-yellow-600">₹1,00,000</span>
                    </CardTitle>
                    <CardDescription>2.22% Annual Return</CardDescription>
                  </CardHeader>
                </Card>

                <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-green-800 mb-2">Total 3-Year Returns</h4>
                  <div className="text-3xl font-bold text-green-600">₹5,00,000</div>
                  <p className="text-gray-600 mt-2">11.11% Total Return on Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Flexible Payment Schedule</h2>
            <p className="text-xl text-gray-600">Easy payment options to suit your financial planning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <CardTitle className="text-green-800">Booking</CardTitle>
                <CardDescription>Initial Payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">5%</div>
                <p className="text-gray-600">₹2,25,000</p>
                <p className="text-sm text-gray-500 mt-2">Secure your cottage</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-green-800">Agreement</CardTitle>
                <CardDescription>Documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">20%</div>
                <p className="text-gray-600">₹9,00,000</p>
                <p className="text-sm text-gray-500 mt-2">Legal formalities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <CardTitle className="text-green-800">Construction</CardTitle>
                <CardDescription>Milestone Based</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600 mb-2">75%</div>
                <p className="text-gray-600">₹33,75,000</p>
                <p className="text-sm text-gray-500 mt-2">Progress payments</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-600">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-800">Handover</CardTitle>
                <CardDescription>Ready to Move</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-600">Complete</p>
                <p className="text-sm text-gray-500 mt-2">Keys in hand</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Why Invest with AKC Developers?</h2>
            <p className="text-xl text-gray-600">Exclusive benefits designed for smart investors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Guaranteed Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fixed returns for the first 3 years with transparent calculation and timely payments</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All approvals in place with clear title and RERA compliance for your security</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Ready to Move</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fully furnished cottages ready for immediate occupation or rental income</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No hidden costs, all-inclusive pricing with detailed payment schedule</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <IndianRupee className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Flexible Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Easy EMI options and milestone-based payments to suit your budget</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Complete Package</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Furniture, amenities, maintenance - everything included in the price</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Investment Calculator</h2>
          <p className="text-xl mb-12">Calculate your returns and plan your investment</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Your Investment</h3>
                <div className="text-4xl font-bold mb-2">₹45,00,000</div>
                <p className="text-lg opacity-90">Total Investment Amount</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">3-Year Returns</h3>
                <div className="text-4xl font-bold mb-2">₹5,00,000</div>
                <p className="text-lg opacity-90">Guaranteed Returns</p>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Return Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Year 1 (6.67%)</span>
                  <span className="font-bold">₹3,00,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Year 2 (2.22%)</span>
                  <span className="font-bold">₹1,00,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Year 3 (2.22%)</span>
                  <span className="font-bold">₹1,00,000</span>
                </div>
                <div className="border-t border-white/30 pt-3 flex justify-between items-center text-xl font-bold">
                  <span>Total ROI</span>
                  <span>11.11%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the smart investors who have already secured their future with Mira Greens Nature Farms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link to="/contact">Book Site Visit</Link>
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold px-8 py-3">
              Download Brochure
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
              <Link to="/cottages">View Cottages</Link>
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

export default Investment;