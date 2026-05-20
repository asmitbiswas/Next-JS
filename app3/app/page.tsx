'use client'
import Image from "next/image";
import Avatar from "./comps/Avatar";
export default function Home() {
  
  return(
   <div style={{padding: "20px"}}>
      <h1>My avatars</h1>
      <Avatar
      name="Asmit Biswas"
      image="https://via.placeholder.com/150"
      size="sm"
      />

       <Avatar
      name="Asmit Biswas"
      image="https://via.placeholder.com/150"
      size="md"
      />

       <Avatar
      name="Asmit Biswas"
      image="https://via.placeholder.com/150"
      size="lg"
      />
   </div>
  )
  
}
