import Link from 'next/link'
export default function App(){
  return <div>
    <h1>Techical agency</h1>
    <p>
      <Link href = "/blog">BLogs page</Link>
    </p>
    <p>
      <Link href = "/SEO">Seo page</Link>
    </p>
    <p>
      <Link href = "/about">About page</Link>
    </p>
  </div>
}