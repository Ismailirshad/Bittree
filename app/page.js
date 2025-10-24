'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")

  const createTree = () => {
    router.push(`/Generate?handle=${text}`)
  }
  return (
    <>
      <section className="bg-green-800 h-[100vh] grid grid-cols-2 " >
        <div className="flex  flex-col items-center justify-center">
          <div className="w-[550px] h-full flex flex-col items-center justify-center text-start gap-5">
            <h1 className="text-6xl text-yellow-400 font-bold">Everything you are. In one, simple link in bio</h1>
            <p className="text-xl text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create,
              curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="flex gap-4">
              <input type="text" value={text} onChange={(e) => { settext(e.target.value) }} className="bg-amber-50 text-black p-2 rounded-xl" placeholder="Enter your Handle"  suppressHydrationWarning />
              <button onClick={() => createTree()} className="bg-pink-300 text-black px-3 font-semibold rounded-2xl">Claim Your Linktree</button>
            </div>
          </div>
        </div>
        <div className="flex items-center mx-auto">
          <div className="w-[550px] h-full flex items-center justify-center">
            <Image width={500} height={400} src="https://uploads-ssl.webflow.com/5db7f73b24ac075340659d60/6304564515bf056e26c07588_linktree-share-goal.png" alt="" />

          </div>
        </div>

      </section>
    </>
  );
}
