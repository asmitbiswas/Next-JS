'use client '
import Image from "next/image";
import Btn from "./components/Button comp/button";
export default function Home() {
  return(
    <div>
      <Btn label = "click" onClick = {() => alert("1145")}/>
    </div>
  )
}

