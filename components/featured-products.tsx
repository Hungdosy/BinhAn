import Link from "next/link";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Tủ gỗ hiện đại",
      category: "Tủ đựng",
      price: "15,000,000 VND",
      image: "/modern-wooden-cabinet.jpg"
    },
    {
      id: 2,
      name: "Kệ trưng bày",
      category: "Kệ",
      price: "8,500,000 VND",
      image: "/display-shelf-design.jpg"
    },
    {
      id: 3,
      name: "Bàn làm việc",
      category: "Bàn",
      price: "12,000,000 VND",
      image: "/premium-desk-furniture.jpg"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">Sản Phẩm Nổi Bật</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Bộ sưu tập tinh chọn
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Những sản phẩm được yêu thích nhất của chúng tôi, được thiết kế với sự tỉ mỉ và công phu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <div key={product.id} className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <p className="text-primary text-sm font-semibold uppercase tracking-wide">{product.category}</p>
                <h3 className="font-semibold text-lg text-foreground mt-2">{product.name}</h3>
                <p className="text-primary font-bold text-lg mt-4">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
