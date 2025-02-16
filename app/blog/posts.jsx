'use client';
import { use } from 'react';
 
export default function Posts({
  posts,
}) {
  const allPosts = use(posts)

 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}