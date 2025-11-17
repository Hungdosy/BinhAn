"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.2)_75%,rgba(255,255,255,.2))]" style={{ backgroundSize: "60px 60px" }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Tối ưu hóa không gian <em className="not-italic font-light">của bạn</em>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Khám phá các giải pháp thiết kế nội thất cao cấp từ Bình An. Chúng tôi biến những ý tưởng thành hiện thực với chất lượng vô cùng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center">
                Xem Sản phẩm
              </Link>
              <Link href="#contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center">
                Liên hệ ngay
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-96 bg-white/10 rounded-2xl overflow-hidden">
              <img
                src="/modern-interior-design-decoration.jpg"
                alt="Thiết kế nội thất"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
