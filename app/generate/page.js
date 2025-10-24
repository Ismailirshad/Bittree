import { Suspense } from 'react'
import Generate from '../components/GenerateContent'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="bg-[#2c2c2c] h-screen flex items-center justify-center text-white">
      Loading...
    </div>}>
      <Generate />
    </Suspense>
  )
}
