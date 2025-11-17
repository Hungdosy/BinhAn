"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">B</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground hidden sm:inline">Bình An</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sản phẩm
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Về chúng tôi
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Liên hệ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Home
            </Link>
            <Link href="/products" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Sản phẩm
            </Link>
            <Link href="#about" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Về chúng tôi
            </Link>
            <Link href="#contact" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
