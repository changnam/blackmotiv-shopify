import Posts from "@/app/ui/posts";
import {delay} from "@/app/lib/utils"
import { Suspense } from 'react'

export default async function Page() {
  // const data = await fetch('https://api.vercel.app/blog',{cache: "no-store"})
  // const posts = await data.json()
  // Using the function:
  const posts =  fetch('https://api.vercel.app/blog',{cache: "no-store"}).then(res => res.json);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}