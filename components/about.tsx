export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 bg-secondary rounded-xl overflow-hidden">
            <img
              src="/company-interior-design-team.jpg"
              alt="Về công ty Bình An"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide">Về Chúng Tôi</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                Chất lượng & Sáng tạo
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tại Bình An, chúng tôi tin rằng mỗi không gian có tiềm năng riêng. Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế nội thất, chúng tôi đã giúp hàng trăm khách hàng tạo nên những không gian thật sự độc đáo.
            </p>
            <ul className="space-y-3">
              {[
                "Thiết kế tùy chỉnh theo yêu cầu",
                "Chất liệu cao cấp & bền vững",
                "Thi công chuyên nghiệp",
                "Hỗ trợ khách hàng 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
