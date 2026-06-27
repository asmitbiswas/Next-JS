import Link from "next/link";

export default function () {
  return (
    <>
      <h1>About Page not found!</h1>
      <p>Could not found the page you are looking for.</p>
      <p>
        <Link href ="/home">Go back to home</Link>
      </p>
    </>
  );
}