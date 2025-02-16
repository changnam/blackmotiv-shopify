import Posts from "@/app/ui/posts";
import {delay} from "@/app/lib/utils"
import { Suspense } from 'react'

async function fetchData(url) {
  await delay(3000);
  return fetch(url) // Fetch data from the API
    .then(response => response.json()); // Convert response to JSON
}


export default async function Page() {
  // const data = await fetch('https://api.vercel.app/blog',{cache: "no-store"})
  // const posts = await data.json()
  // Using the function:
  const posts =  fetchData('https://api.vercel.app/blog',{cache: "no-store"});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}