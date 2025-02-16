import Posts from '@/app/ui/posts';
import { Suspense } from 'react'
 
function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(  [{
      id: 24,
      title: 'Culinary Delights from Around the World',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      author: 'Lily Smith',
      date: '2023-02-08',
      category: 'Food & Cooking'
    },
    {
      id: 25,
      title: 'Exploring Ancient Wonders of the World',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      author: 'Noah Johnson',
      date: '2023-02-01',
      category: 'History'
    }
  ]), 2000);
  });
}

// fetchData().then(console.log); // Output after 2 sec: "📦 Data Loaded"

export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts()
 
  return (
      <Posts posts={posts} />
  )
}