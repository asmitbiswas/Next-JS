import Link from "next/link";
export default function Service(){
   return(
    <div>
    <h1>Services</h1>
    <p>
    <Link href = "/servicess/app-dev">Seo</Link>
    </p>
    <p>
     <Link href = "/servicess/web-dev">web-dev</Link>
    </p>
    </div>
   )
}