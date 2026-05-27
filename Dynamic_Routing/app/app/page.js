import Link from "next/link";

export default async function Home(searchParams, params) {
  console.log(await searchParams)
  console.log(await params)
  return(
    <div>
    <h1>Technical Agency</h1>
    <p>
      <Link href = "/blogs">blogs</Link>
    </p>
    <p>
      <Link href = "/blogs/about">about</Link>
    </p>
    <p>
      <Link href = "/seo">SEO</Link>
    </p>
    
    </div>
  )
}
