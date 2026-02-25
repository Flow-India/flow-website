import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  legal: [
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-black"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Flow</span>
            </a>

            <p className="text-gray-400 mb-6 max-w-sm">
              Your daily office commute, simplified. Join thousands of
              professionals who&apos;ve transformed their daily travel
              experience.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>business@thecabcompany.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 81231 78153</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Flow. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.icon.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
