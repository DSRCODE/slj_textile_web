"use client";

import Link from "next/link";
import { ShoppingBag, Truck, ShieldCheck, Phone } from "lucide-react";
import Hero from "./components/Hero";
import CategoriesLadder from "./components/CategoriesLadder";
import WhyChooseUs from "./components/WhyChooseUs";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero></Hero>

      <CategoriesLadder />

      <WhyChooseUs />

      {/* Elegant CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6"
          >
            Start Your Custom Order
          </motion.h3>

          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Premium textiles with bulk printing & branding solutions
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-lg font-semibold text-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-amber-400/30"
          >
            <Phone size={20} />
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
