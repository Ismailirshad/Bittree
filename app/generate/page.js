import { Suspense } from 'react'
import GenerateContent from '../components/GenerateContent.js'

export default function GeneratePage() {
  return (
    <Suspense fallback={
      <div className="bg-[#2cae6d] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <GenerateContent />
    </Suspense>
  )
}