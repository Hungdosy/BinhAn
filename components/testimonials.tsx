"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Hương",
      role: "Chủ nhà hàng",
      content: "Bình An đã giúp tôi biến không gian nhà hàng thành một điểm đến độc đáo. Đội ngũ của họ rất chuyên nghiệp và lắng nghe ý kiến.",
      avatar: "/woman-portrait.jpg"
    },
    {
      id: 2,
      name: "Trần Minh Đức",
      role: "Kiến trúc sư",
      content: "Chất lượng sản phẩm từ Bình An luôn vượt quá kỳ vọng của tôi. Tôi rất vui khi làm việc với họ trong các dự án.",
      avatar: "/man-portrait.jpg"
    },
    {
      id: 3,
      name: "Lê Thu Thảo",
      role: "Nhà thiết kế nội thất",
      content: "Từ tư vấn ban đầu đến hoàn thành công việc, mọi thứ đều suôn sẻ và chuyên nghiệp. Tôi sẽ tiếp tục hợp tác.",
      avatar: "/professional-woman.png"
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">Đánh giá từ khách hàng</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Khách hàng nói gì về chúng tôi
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/50 rounded-2xl p-8 sm:p-12 relative">
            <p className="text-4xl font-serif text-primary mb-6">❝</p>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {testimonials[current].content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 hover:bg-border rounded-lg transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-2 hover:bg-border rounded-lg transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
