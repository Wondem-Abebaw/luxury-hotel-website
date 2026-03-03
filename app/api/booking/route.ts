import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

export async function POST(req: NextRequest) {
  try {
    // Check content type first
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { message: 'Content-Type must be application/json' },
        { status: 415 }
      )
    }

    // Safely parse body
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { message: 'Invalid JSON body' },
        { status: 400 }
      )
    }

    const {
      guestName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType,
      specialRequests,
    } = body

    // Validate required fields
    if (!guestName || !email || !checkIn || !checkOut) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, checkIn, checkOut' },
        { status: 400 }
      )
    }

    // Check env vars are present
    if (!process.env.SANITY_API_TOKEN) {
      console.error('SANITY_API_TOKEN is not set')
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Save to Sanity
    const booking = await client.create({
      _type: 'booking',
      guestName,
      email,
      phone: phone || '',
      checkIn,
      checkOut,
      guests: Number(guests),
      roomType: roomType || 'any',
      specialRequests: specialRequests || '',
      status: 'pending',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Booking submitted successfully', id: booking._id },
      { status: 201 }
    )

  } catch (error: any) {
    console.error('Booking API error:', error?.message || error)
    return NextResponse.json(
      { message: error?.message || 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}