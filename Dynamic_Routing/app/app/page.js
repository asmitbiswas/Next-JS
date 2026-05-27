import Link from "next/link";

export default function Home() {
  return(
    <div>
    <h1>Technical Agency</h1>
    <p>
      <Link href = "/">blogs</Link>
    </p>
    <p>
      <Link href = "/">about</Link>
    </p>
    <p>
      <Link href = "/">SEO</Link>
    </p>
    
    </div>
  )
}
