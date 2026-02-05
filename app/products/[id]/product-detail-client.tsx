"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetailClient({ product }: { product: any }) {
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-28 pb-10 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-amber-600 font-medium mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            key={activeVariant.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-6 shadow border"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={activeVariant.image}
                alt={activeVariant.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Product Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant: any) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariant(variant)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                      ${
                        activeVariant.id === variant.id
                          ? "border-amber-600 bg-amber-50 text-amber-700"
                          : "border-gray-300 hover:border-amber-400 text-gray-400"
                      }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">
                {activeVariant.details}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {product.specs.map((item: any, index: any) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
                Request Quote
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-amber-500 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
