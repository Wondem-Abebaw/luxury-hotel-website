import { defineField, defineType } from 'sanity'

export const bookingSchema = defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'guestName',
      title: 'Guest Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'checkIn',
      title: 'Check-In Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'checkOut',
      title: 'Check-Out Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'guests',
      title: 'Number of Guests',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'roomType',
      title: 'Room Type',
      type: 'string',
    }),
    defineField({
      name: 'specialRequests',
      title: 'Special Requests',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
  ],
  preview: {
  select: {
    title: 'guestName',
    subtitle: 'status',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
  },
  prepare({ title, subtitle, checkIn, checkOut }) {
    const formatDate = (dateStr: string) => {
      if (!dateStr) return ''
      const date = new Date(dateStr + 'T00:00:00') // prevent timezone shift
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    }

    return {
      title: title,
      subtitle: `${subtitle?.toUpperCase()} · ${formatDate(checkIn)} → ${formatDate(checkOut)}`,
    }
  },
},
})