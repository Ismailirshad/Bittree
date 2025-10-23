"use client"

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';


function generate() {
  const searchParams = useSearchParams()
  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")

  const handleLinkTextChange = (index, newText) => {
    setlinks(prev =>
      prev.map((item, i) => i === index ? { ...item, linktext: newText } : item)
    );
  };

  const handleLinkChange = (index, newLink) => {
    setlinks(prev =>
      prev.map((item, i) => i === index ? { ...item, link: newLink } : item)
    );
  };


  const addLink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }
  const submitLink = async () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "links": links,
      "pic": pic
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const p = await fetch("/api/add", requestOptions)
    const result = await p.json()
    console.log(result)
    if (result.success) {
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }

  }
  return (
    <div className=' bg-[#2cae6d] h-auto grid grid-cols-2'>


      <div className="col-1 flex flex-col mt-20 items-center justify-center gap-3">

        <h1 className='text-3xl font-bold'>Create Your bitTree</h1>

        <div className='flex w-110 flex-col gap-5 my-3 text-start'>
          <h1 className='font-semibold text-2xl'>Step 1: Claim your Handle</h1>
          <div className='mx-4'>
            <input onChange={e => sethandle(e.target.value)} value={handle || ""} className='p-1 border rounded-md text-md font-semibold focus:outline-pink-500
             text-center  bg-slate-50' type="text" placeholder='choose a handle' />
          </div>
        </div>

          <div className='flex w-110 flex-col gap-5 my-3 text-start'>
          <h1 className='font-semibold text-2xl'>Step 3: Add picture and Finalize</h1>
          <div className='mx-4 gap-2 w-80 flex flex-col'>
            <input value={pic || ""} onChange={e => setpic(e.target.value)} className='p-1 border rounded-md text-md font-semibold focus:outline-pink-500 w-full
             text-center  bg-slate-50' type="text" placeholder='Enter link to your profile' />
          </div>
        </div>

        <div className='flex w-110 flex-col gap-5 my-2'>
          <h1 className='font-semibold text-2xl'>Step 1: Add Links</h1>
          <div className='mx-4 gap-2 flex flex-col'>
            {links && links.map((item, index) => {
              return <div className='flex w-80 flex-col gap-5 my-2' key={index}>

                <input
                  onChange={e => handleLinkTextChange(index, e.target.value)}
                  value={item.linktext}
                  className="p-1 border rounded-md text-md font-semibold focus:outline-pink-500 text-center bg-slate-50"
                  type="text"
                  placeholder="Enter Link text"
                />

                <input
                  onChange={e => handleLinkChange(index, e.target.value)}
                  value={item.link}
                  className="p-1 border rounded-md text-md font-semibold focus:outline-pink-500 text-center bg-slate-50"
                  type="text"
                  placeholder="Enter Link"
                />
            <button onClick={() => addLink()} className='bg-black  py-1 text-green-400 font-bold rounded-md'>AddLink</button>
              </div>
            })}
          </div>
        </div>
          <button onClick={submitLink} className='bg-black text-green-400 font-bold rounded-full py-3 px-5'>Create your BitLink</button>
      </div>

      <div className="col-2">
        <Image width={300} height={300} className='mix-blend-plus-darker' src="https://myfreewilljourney.files.wordpress.com/2021/06/linktree-logo-0.png?w=1200" alt="img" />
        <ToastContainer />
      </div>


    </div>
  )
}

export default generate
