import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, User, Calendar, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to="/contact" className="text-green-900 font-bold border-b-2 border-green-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1722480417317-9e9371240ac2?w=1920&auto=format&fit=crop&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Let's Discuss Your Investment in Paradise
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team is ready to assist you with all your queries about Mira Greens Nature Farms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">+91 78401 32200</p>
                  <p className="text-gray-600">Office</p>
                  <p className="font-semibold">+91 86608 35550</p>
                  <p className="text-gray-600">Mobile</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Email Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">info@akcdev.com</p>
                  <p className="text-gray-600">General Inquiries</p>
                  <p className="font-semibold">sales@akcdev.com</p>
                  <p className="text-gray-600">Sales Team</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Project Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Saduvelly Village</p>
                  <p className="text-gray-600">Yadadri Bhuvanagiri District</p>
                  <p className="text-gray-600">Telangana, India</p>
                  <p className="text-sm text-gray-500">Sy.No. 145, 146 & 185</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Monday - Saturday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  <p className="font-semibold">Sunday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Address */}
          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Corporate Office</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-4">MITHRA CONSULTANTS</h4>
                <p className="text-gray-700 mb-2">Architects • Engineers • Vasthu Experts</p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> Road No. 4, Ashok Nagar Colony</p>
                  <p>Near N.T.R. Stadium, Bouduppal</p>
                  <p>Hyderabad, Telangana (District)</p>
                  <p><strong>Phone:</strong> +91 78401 32200 (Office)</p>
                  <p><strong>Mobile:</strong> +91 86608 35550</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-green-800 mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: +91 78401 32200
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Email: info@akcdev.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <span>Contact Form</span>
                  </CardTitle>
                  <CardDescription>
                    Please provide your details and we'll contact you soon
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="interest">Interest In</Label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Select your interest</option>
                      <option>1BHK Farm Cottage</option>
                      <option>Investment Plans</option>
                      <option>Site Visit</option>
                      <option>General Information</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Select budget range</option>
                      <option>₹40-45 Lakhs</option>
                      <option>₹45-50 Lakhs</option>
                      <option>₹50+ Lakhs</option>
                      <option>Need Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements or any questions you have..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Why Choose AKC Developers?</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <User className="h-8 w-8 text-green-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Expert Team</h4>
                        <p className="text-gray-600">
                          Our experienced architects, engineers, and vasthu experts ensure quality construction and design
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-8 w-8 text-blue-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Timely Delivery</h4>
                        <p className="text-gray-600">
                          We pride ourselves on completing projects on time with no compromise on quality
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-8 w-8 text-purple-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Prime Locations</h4>
                        <p className="text-gray-600">
                          Strategic location selection with focus on connectivity, growth potential, and natural beauty
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-8 w-8 text-orange-600 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2">24/7 Support</h4>
                        <p className="text-gray-600">
                          Dedicated customer support team available round the clock for all your queries
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Site Visit Booking */}
              <div className="mt-8 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">Schedule a Site Visit</h4>
                <p className="mb-6 opacity-90">
                  Experience Mira Greens Nature Farms firsthand. Our team will arrange a guided tour at your convenience.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Preferred Date" 
                      type="date"
                      className="bg-white/20 border-white/30 text-white placeholder-white/70"
                    />
                    <Input 
                      placeholder="Preferred Time" 
                      type="time"
                      className="bg-white/20 border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold">
                    Book Site Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">What is the total investment required?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The total investment for a fully furnished 1BHK cottage is ₹45,00,000. You can start with a booking amount of just ₹2,00,000 (5% of total price).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">What are the guaranteed returns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer guaranteed returns of ₹3,00,000 in Year 1, ₹1,00,000 in Year 2, and ₹1,00,000 in Year 3, totaling ₹5,00,000 over 3 years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Are all approvals in place?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, the project has Grampanchayat approved layout with NALA conversion. All necessary approvals are in place for legal and hassle-free ownership.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">When will the project be completed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The cottages are ready to move in. Core amenities are completed, with additional recreational facilities being added in phases.
                </p>
              </CardContent>
            </Card>
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

export default Contact;