'use client'
import Image from "next/image";
import Avatar from "./comps/Avatar";
import { Badge } from "./comps/badge";
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
        <div style={{ margin: '20px 0' }}>
        <Badge label="Active" color="green" />
        <Badge label="Developer" color="blue" />
        <Badge label="Coder" color="blue" />
        <Badge label="Inactive" color="red" />
      </div>
   </div>
  )
  
}
