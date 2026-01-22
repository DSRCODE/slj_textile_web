"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { getProductById } from "@/lib/firestore";
import ProductLoader from "@/app/components/ProductLoader";
import ProductNotFound from "@/app/components/ProductNotFound";
import EnquiryModal from "@/app/components/EnquiryModal";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [activeVariantIndex, setActiveVariantIndex] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const data = await getProductById(id as string);
      setProduct(data);
      setActiveVariantIndex(null);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <ProductLoader />;
  if (!product) return <ProductNotFound />;

  const activeVariant =
    activeVariantIndex !== null ? product.variants[activeVariantIndex] : null;

  const displayImage = activeVariant?.image ?? product.image;
  const displayPrice = activeVariant?.price ?? product.price;
  const displayDescription = activeVariant?.description ?? product.description;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-10 pb-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-amber-600 font-medium mb-2">
            {product.categoryName}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            key={activeVariantIndex ?? "default"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 shadow border"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={displayImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Details */}
          <div className="space-y-4">
            {/* Price */}
            {displayPrice && (
              <p className="text-2xl font-bold text-amber-600">
                ₹{displayPrice}
              </p>
            )}

            {/* Description */}
            <div>
              <h2 className="text-2xl text-gray-800 font-semibold mb-3">
                Product Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {displayDescription}
              </p>
            </div>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div>
                <h3 className="text-lg text-gray-800 font-semibold mb-4">
                  Variants
                </h3>

                <div className="flex flex-wrap gap-3">
                  {/* Default Option */}
                  <button
                    onClick={() => setActiveVariantIndex(null)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition
        ${
          activeVariantIndex === null
            ? "border-amber-600 bg-amber-50 text-amber-700"
            : "border-gray-300 text-gray-600 hover:border-amber-400"
        }`}
                  >
                    {product.name}
                  </button>

                  {product.variants.map((variant: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveVariantIndex(index)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition
          ${
            activeVariantIndex === index
              ? "border-amber-600 bg-amber-50 text-amber-700"
              : "border-gray-300 text-gray-600 hover:border-amber-400"
          }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        product={{
          id: product.id,
          name: product.name,
          categoryId: product.categoryId,
          categoryName: product.categoryName,
        }}
        open={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
      />
    </div>
  );
}
