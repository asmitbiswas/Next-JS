// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Blog not found</p>

      <Link href="/">
        Go Home
      </Link>
    </div>
  );
}