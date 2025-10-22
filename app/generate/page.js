"use client"

// ✅ Prevent Next.js from prerendering this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Suspense } from "react"
import Generate from "./Generate"

export default function GeneratePage() {
  return (
    <Suspense fallback={<div style={{
      textAlign: "center",
      marginTop: "40px",
      fontWeight: "600"
    }}>
      Loading your BitTree...
    </div>}>
      <Generate />
    </Suspense>
  )
}
