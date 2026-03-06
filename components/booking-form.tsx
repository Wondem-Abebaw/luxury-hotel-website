"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Users, CheckCircle, Loader2 } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: "2",
    roomType: "all",
    specialRequests: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          checkIn: formData.checkIn?.toISOString().split("T")[0],
          checkOut: formData.checkOut?.toISOString().split("T")[0],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        guestName: "",
        email: "",
        phone: "",
        checkIn: null as Date | null,
    checkOut: null as Date | null,
        guests: "2",
        roomType: "all",
        specialRequests: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  // Success State
  if (status === "success") {
    return (
      <section
        id="booking"
        className="py-20 px-4 bg-secondary text-secondary-foreground"
      >
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-3">
            Booking Received!
          </h2>
          <p className="text-secondary-foreground/80 mb-6">
            Thank you! We've received your booking request and will confirm it
            shortly via email.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
          >
            Make Another Booking
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="py-20 px-4 bg-secondary text-secondary-foreground"
    >
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 — Guest Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Row 2 — Dates, Guests, Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check-In */}
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Check-In *
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-3 z-10 text-secondary-foreground/50"
                />
                <DatePicker
                  selected={formData.checkIn}
                  onChange={(date:any) =>
                    setFormData((prev) => ({ ...prev, checkIn: date }))
                  }
                  selectsStart
                  startDate={formData.checkIn}
                  endDate={formData.checkOut}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="March 10, 2026"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Check-Out *
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-3 z-10 text-secondary-foreground/50"
                />
                <DatePicker
                  selected={formData.checkOut}
                  onChange={(date:any) =>
                    setFormData((prev) => ({ ...prev, checkOut: date }))
                  }
                  selectsEnd
                  startDate={formData.checkIn}
                  endDate={formData.checkOut}
                  minDate={formData.checkIn || new Date()}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="March 15, 2026"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                Guests
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-3 text-secondary-foreground/50"
                />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
                <option value="all">Any Room</option>
                <option value="standard">Delux Standard Room</option>
                <option value="classic">Classic Room</option>
                <option value="twin">Delux Twin Bed</option>
                <option value="presidential">Presidential Suite</option>
              </select>
            </div>
          </div>

          {/* Row 3 — Special Requests */}
          <div>
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any special requests or preferences..."
              className="w-full px-4 py-2 bg-background text-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Error Message */}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-12 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Booking"
              )}
            </button>
          </div>
        </form>

        {/* Info Text */}
        <p className="text-center text-secondary-foreground/70 text-sm mt-6">
          Best rate guaranteed • Free cancellation • Instant confirmation
        </p>
      </div>
    </section>
  );
}
