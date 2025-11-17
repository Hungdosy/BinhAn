import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Bình An</h3>
            <p className="text-sm text-primary-foreground/80">
              Biến những ý tưởng thành hiện thực với thiết kế nội thất cao cấp.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dự án</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Danh mục</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Tủ đựng</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Kệ</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Bàn</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Ghế</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kết nối</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://www.facebook.com/decorinoxbinhan2025" className="hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Bình An. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Chính sách quyền riêng tư</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
