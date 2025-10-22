import Link from "next/link"
import clientPromise from "../lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const handle = (await params).handle
  const client = await clientPromise
  const db = client.db("bittree")
  const collection = db.collection("links")

  //If the handle is already claimed, you cannot create the bittree
  const item = await collection.findOne({ handle: handle })
  if (!item) {
    return notFound(
    )
  }
  return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
    {item && <div className="photo flex justify-center flex-col items-center">
      <img src={item.pic} alt="dppic" />
      <span className="font-bold text-xl">@{item.handle}</span>
      <span className="desc w-80 text-center"> Made to Travel. For help, please follow one customer support links below</span>
      <div className="links">
        {item.links.map((item, index) => {
          return <Link key={index} href={item.link} > <div className="py-4 px-2 bg-purple-100 shadow-lg flex justify-center rounded-md my-3" >
            {item.linktext}

          </div></Link>
        })}
      </div></div>}
  </div>

}