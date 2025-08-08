"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, Star, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ceo@arsdubai.com",
      color: "from-blue-400 to-blue-600",
      link: "mailto:ceo@arsdubai.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 50 917 9485",
      color: "from-green-400 to-green-600",
      link: `tel:+971509179485`,
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      link: "https://chat.whatsapp.com/KD6dS5oH3cR1titZlW86jS?mode=ac_t",
      value: "Join VIP Group",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Ready to Transform Your Life?
              </span>
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join 5,247 successful traders who have already transformed their
            financial future with my proven golden strategies
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+971509179485">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 shadow-lg shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Phone className="mr-2 h-5 w-5" />
                Book Free Strategy Call
              </Button>
            </a>

            <a
              href="https://chat.whatsapp.com/KD6dS5oH3cR1titZlW86jS?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-3 bg-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Star className="mr-2 h-5 w-5" />
                Join Golden Community
              </Button>
            </a>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((contact, index) => (
              <motion.a
                href={contact.link}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-semibold">{contact.label}</div>
                <div className="text-gray-300 text-sm">{contact.value}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Personal Brand Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-black font-bold text-xl">AD</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Arsdubai
              </div>
              <div className="text-gray-400 text-sm">The Golden Trader</div>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Arsdubai - Professional Forex Trader & Mentor. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Trading involves risk and may not be suitable for all investors.
            Past performance does not guarantee future results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
