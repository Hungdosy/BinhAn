'use client'

import { MessageCircle } from 'lucide-react'

export function ZaloChatWidget() {
  const zaloLink = process.env.NEXT_PUBLIC_ZALO_LINK || 'https://zalo.me/0915201641'

  return (
    <a
      href={zaloLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-colors duration-200 hover:scale-110 transform"
      aria-label="Chat with us on Zalo"
      title="Chat với Bình An"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}