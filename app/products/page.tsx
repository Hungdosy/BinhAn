import { Navigation } from "@/components/navigation";
import { ProductGrid } from "@/components/product-grid";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProductGrid />
      <Footer />
    </div>
  );
}
