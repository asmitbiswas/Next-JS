import Link from "next/link";
export default function Home() {
  return (
   <div>
     <h1>
        Technical Agency
      </h1>
      <p>
        <Link href = "/about">About</Link>
      </p>
      <p>
        <Link href = "/blog">Blogs page</Link>
      </p>
      <p>
        <Link href = "/SEO">seo page</Link>
      </p>
      <p>
        <Link href = "/servicess">services page</Link>
      </p>
      </div>
  );
}