"use client";

import { useState } from "react";

export function ProductGrid() {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Tủ gỗ sồi cao cấp",
      category: "Tủ đựng",
      price: "18,500,000 VND",
      image: "/wooden-cabinet.jpg"
    },
    {
      id: 2,
      name: "Kệ trưng bày modernist",
      category: "Kệ",
      price: "9,500,000 VND",
      image: "/modern-display-shelf.jpg"
    },
    {
      id: 3,
      name: "Bàn làm việc tối thiểu",
      category: "Bàn",
      price: "14,000,000 VND",
      image: "/minimalist-desk.jpg"
    },
    {
      id: 4,
      name: "Ghế tựa sang trọng",
      category: "Ghế",
      price: "12,500,000 VND",
      image: "/luxury-chair.jpg"
    },
    {
      id: 5,
      name: "Tủ sơn bóng",
      category: "Tủ đựng",
      price: "16,000,000 VND",
      image: "/glossy-cabinet.jpg"
    },
    {
      id: 6,
      name: "Kệ tường kết hợp",
      category: "Kệ",
      price: "8,000,000 VND",
      image: "/wall-shelf.jpg"
    },
  ];

  const categories = ["all", "Tủ đựng", "Kệ", "Bàn", "Ghế"];
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-wide">Bộ sưu tập đầy đủ</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2 text-foreground">
          Tất cả sản phẩm
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {cat === "all" ? "Tất cả" : cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative h-80 bg-muted rounded-xl overflow-hidden mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide">{product.category}</p>
            <h3 className="font-semibold text-lg text-foreground mt-2">{product.name}</h3>
            <p className="text-primary font-bold text-lg mt-3">{product.price}</p>
            <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
