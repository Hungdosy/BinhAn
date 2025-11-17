'use client'

import { useEffect, useState } from 'react'
// Đã xóa MessageCircle vì chúng ta sẽ dùng ảnh Logo Zalo
// import { MessageCircle } from 'lucide-react' 

export function ZaloChatWidget() {
  // Lấy số điện thoại hoặc link từ biến môi trường
  const envZalo = process.env.NEXT_PUBLIC_ZALO_LINK || '0971626088'
  
  // LOGIC QUAN TRỌNG: Tự động thêm https://zalo.me/ nếu chỉ điền số điện thoại
  // Giúp tránh lỗi 404 khi click
  const zaloLink = envZalo.startsWith('http') ? envZalo : `https://zalo.me/${envZalo}`

  const [isVisible, setIsVisible] = useState(true)

  // Ẩn button khi scroll xuống, hiện lại khi scroll lên
  useEffect(() => {
    let lastScroll = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > lastScroll + 50) {
        setIsVisible(false)
      } else if (window.scrollY < lastScroll - 50) {
        setIsVisible(true)
      }
      lastScroll = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={zaloLink}
      target="_blank"
      rel="noopener noreferrer"
      // Thay đổi style: Dùng bg-white (nền trắng) để Logo Zalo màu xanh nổi bật nhất
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="Chat with us on Zalo"
      title="Chat với Bình An qua Zalo"
    >
      {/* Dùng ảnh Logo Zalo chuẩn */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
        alt="Zalo Icon" 
        className="w-10 h-10" 
      />
    </a>
  )
}