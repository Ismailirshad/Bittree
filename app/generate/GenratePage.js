import { Suspense } from 'react'
import GenerateContent from './GenerateContent'

export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="bg-[#2c2c2c] h-screen flex items-center justify-center text-white">Loading...</div>}>
      <GenerateContent />
    </Suspense>
  )
}

export const dynamic = 'force-dynamic'