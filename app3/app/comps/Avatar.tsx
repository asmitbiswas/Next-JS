'use client'

import { useState } from "react";

interface AvatarProps{
    name: string;
    image: string;
    size: "sm" | "md" | "lg"
}

export default function Avatar({name, image, size}: AvatarProps){
    const sizeStyles = {
        sm: {width: "40px", height: "40px", fontSize: "12px" },
        md: {width: "60px", height: "60px", fontSize: "14px"},
        lg: {width: "100px", height: "100px", fontSize: "20px"}
    }

    const[isHovered, setIsHovered] = useState(false)

    return(
        <div style={{
            textAlign: "center", 
            margin : "20px",
            cursor : "pointer",
            transform :isHovered ? 'scale(1.1) rotate(5deg)' : "scale(1)",
            filter : isHovered ? 'brightness(1.2)'  : "brightness(1)",
            transition : 'transform 0.3s ease',
            boxShadow : isHovered ? "0 10px 30px rgba(0, 0, 0, 3)" : "none"
        }}
         onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
        >
            <img
            src={image}
            alt={name}
            style = {{
                width : sizeStyles[size].width,
                height : sizeStyles[size].height,
                fontSize : sizeStyles[size].fontSize,
                borderRadius : '50%',
                objectFit : "cover",
                border : "3px solid #3b82f6 "
            }}
            
            />
            <p style={{
        marginTop: '10px', 
        fontWeight: 'bold',
        color: isHovered ? '#EF4444' : '#fff',
         transition: 'color 0.3s ease'

            }}> {name} </p>
        </div>
    )
}
