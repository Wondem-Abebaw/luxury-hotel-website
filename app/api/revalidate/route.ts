import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_REVALIDATE_SECRET

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME)
    const body = await req.text()

    // 1. Validate that the request actually came from Sanity
    if (!signature || !isValidSignature(body, signature, secret!)) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    // 2. Clear the 'room' cache
  revalidateTag('room', 'default')
    
    console.log('✅ Revalidated Room Data')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}