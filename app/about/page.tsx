"use client";

import { motion } from "framer-motion";
import { Shirt, Award, Users, Factory } from "lucide-react";

const AboutSLJTextiles = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/40">
      {/* Hero + About Intro */}
      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg">
              <Shirt className="w-5 h-5 mr-2" />
              <span className="font-semibold tracking-wide">
                About SLJ Textiles
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-amber-800 bg-clip-text text-transparent mb-6">
              Crafting Quality Apparel
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              SLJ Textiles is a trusted Indian garment manufacturing and
              printing company delivering premium-quality apparel solutions
              since 2010. We combine modern textile technology with skilled
              craftsmanship to create garments that represent durability,
              comfort, and brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core About Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We specialize in multi-purpose garment printing including DTG,
              DTF, screen, sublimation, and vinyl printing. Our production unit
              is equipped to handle both bulk corporate orders and premium
              custom apparel with equal precision.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From fabric selection to final finishing, every step is closely
              monitored to ensure long-lasting prints, accurate fitting, and
              consistent quality across all orders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-xl border"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose SLJ Textiles
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>• 15+ years of manufacturing experience</li>
              <li>• Advanced printing & stitching infrastructure</li>
              <li>• Strong quality control & timely delivery</li>
              <li>• Trusted by 50,000+ clients across India</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Compact Stats */}
      <section className="py-14 bg-white/60">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Award />, label: "Years Experience", value: "15+" },
            { icon: <Users />, label: "Happy Clients", value: "50K+" },
            { icon: <Factory />, label: "Sq Ft Facility", value: "20,000" },
            { icon: <Shirt />, label: "Garments Produced", value: "1M+" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white shadow-md border">
              <div className="text-amber-600 mb-3 flex justify-center">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {item.value}
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Your Apparel Together
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you need custom uniforms, branded merchandise, or bulk
            production — SLJ Textiles is ready to deliver.
          </p>
          <button className="px-10 py-4 bg-white text-amber-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSLJTextiles;
