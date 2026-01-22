"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCubeOutline, IoSearchOutline } from "react-icons/io5";
import CustomSelect from "../components/CustomSelect";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  categoryId: string;
  categoryName: string;
}

interface Category {
  id: string;
  name: string;
  createdAt: {
    type: string;
    seconds: number;
    nanoseconds: number;
  };
  image?: string;
  status?: boolean;
}

export default function ProductsClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  console.log(products);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      return matchName && matchCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-14 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of apparel and textile solutions.
        </p>
      </section>

      {/* 🔍 Filters */}
      <section className="max-w-7xl mx-auto px-4 mb-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-3.5 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border  shadow-sm border-gray-300 text-gray-600 rounded-xl text-sm  outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <CustomSelect
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Grid / Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="flex justify-center">
          <div className="border rounded-2xl p-10 mb-10 text-center max-w-2xl w-full">
            <IoCubeOutline className="mx-auto text-4xl text-amber-600 mb-4" />
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              No Products Found
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Try changing your search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        </div>
      ) : (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs uppercase text-amber-600 font-semibold">
                    {product.categoryName}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm font-semibold text-amber-600"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
