import Link from "next/link";

export default function Home() {
  return(
    <div>
    <h1>Technical Agency</h1>
    <p>
      <Link href = "/blogs">blogs</Link>
    </p>
    <p>
      <Link href = "/about">about</Link>
    </p>
    <p>
      <Link href = "/seo">SEO</Link>
    </p>
    
    </div>
  )
}
