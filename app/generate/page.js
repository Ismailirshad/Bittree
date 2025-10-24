'use client'
import { useSearchParams } from 'next/navigation'
import Generate from '../components/GenerateContent'

export default function GeneratePage() {
  const searchParams = useSearchParams()
  const handle = searchParams.get('handle')
  
  return <Generate initialHandle={handle} />
}

export const dynamic = 'force-dynamic'