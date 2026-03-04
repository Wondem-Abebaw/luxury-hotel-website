'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className={`relative w-12 h-12 rounded-full overflow-hidden ring-1 transition-all duration-300 ${
              isScrolled ? 'ring-border' : 'ring-white/30'
            }`}>
              <Image
                src="/logo.jpg"
                alt="Luxe Haven logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-primary'
            }`}>
              Luxe Haven
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                    isScrolled
                      ? 'text-foreground hover:text-primary'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#booking" className={`px-6 py-2 text-sm uppercase tracking-wider rounded-sm transition-all duration-300 inline-block ${
              isScrolled
                ? 'bg-primary text-primary-foreground hover:opacity-90'
                : 'bg-white/15 text-white border border-white/50 hover:bg-white/25 backdrop-blur-sm'
            }`}>
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-background border-b border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsOpen(false)} className="block w-full mt-4 px-6 py-2 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity text-center">
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}