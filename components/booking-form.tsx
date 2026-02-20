'use client'

import { useState } from 'react'
import { Calendar, Users } from 'lucide-react'

export function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'all',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', formData)
  }

  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Book Your Stay
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Reserve your perfect room in just a few clicks
          </p>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
              Check-In
            </label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-3 text-secondary-foreground/50" />
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
              Check-Out
            </label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-3 text-secondary-foreground/50" />
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
              Guests
            </label>
            <div className="relative">
              <Users size={18} className="absolute left-3 top-3 text-secondary-foreground/50" />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="all">All Rooms</option>
              <option value="deluxe">Deluxe</option>
              <option value="oceanview">Oceanview</option>
              <option value="presidential">Presidential</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full px-8 py-2 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </form>

        {/* Info Text */}
        <p className="text-center text-secondary-foreground/70 text-sm mt-6">
          Best rate guaranteed • Free cancellation • Instant confirmation
        </p>
      </div>
    </section>
  )
}
