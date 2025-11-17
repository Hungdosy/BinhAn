export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide">Liên Hệ</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground mb-8">
              Hãy bắt đầu một cuộc trò chuyện
            </h2>
            <div className="space-y-6">
              {[
                { icon: "📍", label: "Địa chỉ", value: "123 Đường ABC, Hà Nội" },
                { icon: "📞", label: "Điện thoại", value: "+84 (123) 456-7890" },
                { icon: "✉️", label: "Email", value: "hello@binhan.com" },
                { icon: "⏰", label: "Giờ mở cửa", value: "Thứ 2 - Thứ 6: 9AM - 6PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Tin nhắn của bạn"
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
