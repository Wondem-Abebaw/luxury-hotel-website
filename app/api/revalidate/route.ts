import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_REVALIDATE_SECRET

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME)
    const body = await req.text()

    if (!signature || !isValidSignature(body, signature, secret!)) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    const payload = JSON.parse(body)
    const type = payload._type

    if (type === 'room') {
      revalidateTag('room', 'default')   // ← 'default' is the required second arg in Next.js 16
      console.log('✅ Revalidated rooms tag')
    }

    if (type === 'menuItem' || type === 'menuCategory') {
      revalidateTag('menu', 'default')
      console.log('✅ Revalidated menu tag')
    }

    return NextResponse.json({ revalidated: true, type, now: Date.now() })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}