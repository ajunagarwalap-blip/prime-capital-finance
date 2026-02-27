import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ShieldCheck, Landmark, BadgeCheck, MessageCircle } from "lucide-react";

export default function EliteCapitalCorporate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    amount: "",
  });

  const [emiData, setEmiData] = useState({
    principal: "",
    rate: "",
    tenure: "",
  });

  const [emiResult, setEmiResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully. Our Relationship Manager will contact you within 24 hours.");
    setFormData({ name: "", phone: "", email: "", loanType: "", amount: "" });
  };

  const calculateEMI = () => {
    const P = parseFloat(emiData.principal);
    const annualRate = parseFloat(emiData.rate);
    const months = parseFloat(emiData.tenure);
    if (!P || !annualRate || !months) return;
    const R = annualRate / 12 / 100;
    const EMI = (P * R * Math.pow(1 + R, months)) /
      (Math.pow(1 + R, months) - 1);
    setEmiResult(EMI.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-bold">EC</div>
            <div>
              <h1 className="font-bold text-lg">Prime Capital Finance Ltd.</h1>
              <p className="text-xs text-gray-400">Trusted NBFC Financial Services</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#emi" className="hover:text-yellow-400">EMI Calculator</a>
            <a href="#apply" className="hover:text-yellow-400">Apply Now</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold leading-tight">
              Apply Personal, Business, Home & Car Loan Online
            </motion.h2>
            <p className="mt-6 text-gray-300 text-lg">
              RBI Compliant NBFC offering secure, transparent and fast loan solutions for individuals and businesses across India.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-5">Apply For Loan</Button>
              <Button variant="outline" className="rounded-xl border-white text-white px-8 py-5">Download Brochure</Button>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Key Highlights</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><ShieldCheck /> RBI Registered NBFC</li>
              <li className="flex items-center gap-3"><BadgeCheck /> 100% Transparent Process</li>
              <li className="flex items-center gap-3"><Landmark /> Competitive Interest Rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">About Prime Capital Finance</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          Prime Capital Finance Ltd. is a professionally managed financial services company committed to delivering reliable and ethical loan solutions across India. Our mission is to simplify credit accessibility while maintaining transparency, compliance and customer trust.
        </p>
      </section>

      {/* Why Choose Us - SEO Section */}
      <section className="py-20 bg-white px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Prime Capital Finance?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-2xl shadow-md border">
              <h4 className="font-semibold text-lg mb-2">RBI Compliant Processing</h4>
              <p className="text-gray-600">We follow regulatory guidelines and transparent loan processing standards to ensure secure financial transactions.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border">
              <h4 className="font-semibold text-lg mb-2">Fast Loan Approval</h4>
              <p className="text-gray-600">Quick verification and speedy approval process to help you get funds without delay.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border">
              <h4 className="font-semibold text-lg mb-2">24 Hour Support</h4>
              <p className="text-gray-600">Our dedicated support team is available to assist you with all loan related queries anytime.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border">
              <h4 className="font-semibold text-lg mb-2">Minimal Documentation</h4>
              <p className="text-gray-600">Simple documentation process designed for faster disbursal and hassle-free experience.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border md:col-span-2">
              <h4 className="font-semibold text-lg mb-2">Trusted Loan Partner</h4>
              <p className="text-gray-600">Thousands of satisfied clients trust Prime Capital Finance for reliable and transparent loan solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Financial Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Personal Loan", "Business Loan", "Home Loan", "Loan Against Property", "Working Capital", "MSME Loan"].map((service, i) => (
              <Card key={i} className="rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4">{service}</h4>
                  <p className="text-gray-600">Flexible tenure, quick disbursal and minimal documentation process.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="emi" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">EMI Calculator</h3>
        <div className="grid gap-6">
          <input type="number" placeholder="Loan Amount" className="p-4 border rounded-xl" onChange={(e)=>setEmiData({...emiData, principal:e.target.value})} />
          <input type="number" placeholder="Interest Rate (%)" className="p-4 border rounded-xl" onChange={(e)=>setEmiData({...emiData, rate:e.target.value})} />
          <input type="number" placeholder="Tenure (Months)" className="p-4 border rounded-xl" onChange={(e)=>setEmiData({...emiData, tenure:e.target.value})} />
          <Button onClick={calculateEMI} className="rounded-xl bg-slate-900 text-white py-5">Calculate EMI</Button>
          {emiResult && <div className="text-center text-2xl font-bold text-green-600">Monthly EMI: ₹ {emiResult}</div>}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Loan Application Form</h3>
          <form action="https://formsubmit.co/armanansari0088988@gmail.com" method="POST" className="grid gap-6">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="p-4 border rounded-xl" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="p-4 border rounded-xl" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="p-4 border rounded-xl" />
            <select name="loanType" value={formData.loanType} onChange={handleChange} required className="p-4 border rounded-xl">
              <option value="">Select Loan Type</option>
              <option>Personal Loan</option>
              <option>Business Loan</option>
              <option>Home Loan</option>
              <option>Loan Against Property</option>
            </select>
            <input type="number" name="amount" placeholder="Required Loan Amount" value={formData.amount} onChange={handleChange} required className="p-4 border rounded-xl" />
            <Button type="submit" className="rounded-xl bg-yellow-500 text-black py-6 text-lg">Submit Application</Button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Corporate Office</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div><Phone className="mx-auto mb-3" /><p>+91 98736 62129</p></div>
          <div><Mail className="mx-auto mb-3" /><p>armanansari0088988@gmail.com</p></div>
          <div><MapPin className="mx-auto mb-3" /><p>Mumbai, Maharashtra, India</p></div>
        </div>
      </section>

      {/* WhatsApp */}
      <a href="https://wa.me/919873662129?text=Hello%20Elite%20Capital%20Team,%20I%20need%20a%20loan" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
        <MessageCircle className="text-white" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Prime Capital Finance Ltd. All Rights Reserved. | Privacy Policy | Terms & Conditions | RBI Guidelines
      </footer>
    </div>
  );
}
