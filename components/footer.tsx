'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-secondary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <a href="/" className="hover:text-primary transition-colors">
                Luxe Haven
              </a>
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Redefining luxury hospitality with timeless elegance, premium accommodations, and exceptional 24/7 service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['Rooms', 'Amenities', 'Gallery', 'Events', 'Blog'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  123 Luxury Lane, Coastal City, CC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@luxehaven.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  info@luxehaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: 'https://www.facebook.com/luxehaven',
                  label: 'Visit our Facebook page',
                },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/luxehaven',
                  label: 'Visit our Instagram profile',
                },
                {
                  icon: Twitter,
                  href: 'https://www.twitter.com/luxehaven',
                  label: 'Visit our Twitter profile',
                },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-secondary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Luxe Haven. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
