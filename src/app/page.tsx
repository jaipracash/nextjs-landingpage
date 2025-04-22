"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

const icons = {
  diagnostics: "/icons/analytic.png",
  screen: "/icons/screen.png",
  battery: "/icons/battery.png",
  water: "/icons/water.png",
  software: "/icons/software.png",
  data: "/icons/data.png",
  repair: "/icons/repair.png",
  shop: "/icons/shop.png",
  service: "/icons/service.png",
  schedule: "/icons/schedule.png", // Make sure this file exists
};

function ServiceModal({ service }: { service: { name: string; icon: string } }) {
  const serviceFeatures = [
    { icon: icons.diagnostics, text: "Free Diagnostics" },
    { icon: icons.battery, text: "90-day Warranty" },
    { icon: icons.data, text: "Data Protection" },
    { icon: icons.water, text: "Quick Service" },
  ];

  return (
    <Modal>
      <ModalTrigger className="bg-black text-white flex justify-center items-center gap-2 p-4 rounded-xl hover:bg-gray-800 transition-all duration-300">
        <img src={service.icon} alt={service.name} className="w-5 h-5" />
        {service.name}
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8">
            {service.name} Service Details
          </h4>
          <div className="flex justify-center items-center">
            {serviceFeatures.map((feature, idx) => (
              <motion.div
                key={`feature-${idx}`}
                style={{ rotate: Math.random() * 20 - 10 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 shrink-0 overflow-hidden"
              >
                <img
                  src={feature.icon}
                  alt={feature.text}
                  width="80"
                  height="80"
                  className="rounded-lg h-20 w-20 object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="py-10 grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {serviceFeatures.map((feature, idx) => (
              <div key={`detail-${idx}`} className="flex items-center">
                <img src={feature.icon} className="w-4 h-4 mr-2" alt="" />
                <span className="text-neutral-700 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28">
            Book Now
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

export default function Home() {
  const bgImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const ourServices = [
    {
      title: "Diagnostics",
      description: "Comprehensive device analysis",
      icon: icons.diagnostics,
    },
    {
      title: "Screen Repair",
      description: "Cracked screen replacement",
      icon: icons.screen,
    },
    {
      title: "Battery Replacement",
      description: "Extended device life",
      icon: icons.battery,
    },
    {
      title: "Water Damage",
      description: "Emergency liquid recovery",
      icon: icons.water,
    },
    {
      title: "Software Fixes",
      description: "OS updates & troubleshooting",
      icon: icons.software,
    },
    {
      title: "Data Recovery",
      description: "Save your important files",
      icon: icons.data,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .2) 0, hsla(0, 0%, 100%, .1) 50%, hsla(0, 0%, 100%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .1) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, .05) 80%, transparent 100%)"
      />
      
      <MainNav />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
        Trusted by 300K+ customers
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">
        Device Repairs Made Simple
      </h1>
      
      <p className="text-lg text-gray-600 max-w-lg">
        We specialize in fast, affordable repairs for all your devices. 
        Our certified technicians provide quality service with a 90-day warranty.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { 
            name: "Repairs",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            )
          },
          { 
            name: "Shop",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            )
          },
          { 
            name: "Service",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          { 
            name: "Schedule",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )
          },
        ].map((item) => (
          <button
            key={item.name}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
          >
            <span className="text-blue-600 group-hover:text-blue-700 mb-2 transition-colors">
              {item.icon}
            </span>
            <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <img 
              key={i}
              src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg`}
              alt="Happy customer"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p>Rated 4.9/5 from 2,500+ reviews</p>
        </div>
      </div>
    </div>

    <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
      
      {/* Floating badge */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-800">Same-day service available</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="w-full bg-gray-50">
      <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">700+ stores nationwide</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wherever you are, we're nearby with expert tech support and repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Diagnostics */}
          <div className="bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free diagnostics</h3>
            <p className="text-gray-600">
              Yes, we'll check your tech at no cost. And if more is needed, we'll do advanced troubleshooting.
            </p>
          </div>

          {/* Low Price Guarantee */}
          <div className="bg-gray-50 p-8 rounded-xl hover:bg-green-50 transition-colors">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Low price guarantee</h3>
            <p className="text-gray-600">
              We'll match a local competitor's price for the same repair and beat it by $5. <a href="#" className="text-blue-600 hover:underline">Learn how</a>.
            </p>
          </div>

          {/* Same-Day Service */}
          <div className="bg-gray-50 p-8 rounded-xl hover:bg-purple-50 transition-colors">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-day service</h3>
            <p className="text-gray-600">
              Need your device back fast? Most of our repairs are done as soon as the same day.
            </p>
          </div>

          {/* Warranty */}
          <div className="bg-gray-50 p-8 rounded-xl hover:bg-yellow-50 transition-colors">
            <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1-year limited warranty</h3>
            <p className="text-gray-600">
              Most repairs also come with our 1-year limited warranty and are valid at all 700+ locations.
            </p>
          </div>
        </div>
      </div>
    </div>
        {/* Moving Text Ticker */}
      <div className="w-full bg-blue-600 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-lg font-medium mx-8">✓ Certified Apple repairer</span>
          <span className="text-white text-lg font-medium mx-8">✓ Repaired within 1 hour</span>
          <span className="text-white text-lg font-medium mx-8">✓ Samsung original parts</span>
          <span className="text-white text-lg font-medium mx-8">✓ 6 months warranty</span>
          {/* Repeat for seamless looping */}
          <span className="text-white text-lg font-medium mx-8">✓ Certified Apple repairer</span>
          <span className="text-white text-lg font-medium mx-8">✓ Repaired within 1 hour</span>
          <span className="text-white text-lg font-medium mx-8">✓ Samsung original parts</span>
          <span className="text-white text-lg font-medium mx-8">✓ 6 months warranty</span>
        </div>
      </div>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
      `}</style>
      {/* Customer Testimonials Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            People like our repairs. A lot.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="iPhone Repair" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-2">
                  <h3 className="font-semibold">John E.</h3>
                  <p className="text-sm text-gray-600">iPhone 4S Max Repair</p>
                </div>
                <p className="text-gray-700 italic">
                  "Even though I am old and tech illiterate, he was not condescending like other tech guys that are 'in the know'"
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Chromebook Repair" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-2">
                  <h3 className="font-semibold">Patricia</h3>
                  <p className="text-sm text-gray-600">Petr Chromebook Repair</p>
                </div>
                <p className="text-gray-700 italic">
                  "Chromebook screen was cracked. It is as good as new. Thank you!"
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Google Pixel Repair" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-2">
                  <h3 className="font-semibold">Portland S.</h3>
                  <p className="text-sm text-gray-600">Google Files? Pro Repair</p>
                </div>
                <p className="text-gray-700 italic">
                  "Friendly, professional service, you went above and beyond to get the needed part from another store. The phone was ready when promised."
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Samsung Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-2">
                  <h3 className="font-semibold">Reyes</h3>
                  <p className="text-sm text-gray-600">Samuraj Galaxy Field Repair</p>
                </div>
                <p className="text-gray-700 italic">
                  "I had an issue with my repair and they took care of it right away. They went beyond expectations to make my repair successful."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Tech Tips & News</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        [
          '5 Signs Your Phone Needs a New Battery', 
          'https://images.unsplash.com/photo-1605236453806-6ff36851237e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
        ],
        [
          'How to Protect Your Device From Water Damage', 
          'https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
        ],
        [
          'The Truth About Third-Party Repair Shops', 
          'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
        ],
      ].map(([title, imageUrl], i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              // Fallback in case image fails to load
              e.currentTarget.src = 'https://via.placeholder.com/500x300?text=Tech+Repair';
            }}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <button className="text-blue-600 font-medium hover:underline">
              Read Article →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Repair Your Device?</h2>
        <p className="text-xl text-blue-100 mb-8">Schedule your repair today and get back to normal faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book Online Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
            Call: (555) 123-4567
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}