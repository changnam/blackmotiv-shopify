import Posts from "@/app/ui/posts";
import {delay} from "@/app/lib/utils"
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog',{cache: "no-store"})
  const posts = await data.json()
  await delay(3000);
  return (
      <Posts posts={posts} />
  )
}