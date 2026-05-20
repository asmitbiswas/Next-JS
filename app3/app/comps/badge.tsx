'use client'

import { useState } from 'react'

interface BadgeProps {
  label: string
  color?: "blue" | "green" | "red"
}

export function Badge({ label, color = "blue" }: BadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colorStyles = {
    blue: { 
      background: isHovered ? '#1E40AF' : '#DBEAFE',
      color: isHovered ? '#fff' : '#1E40AF'
    },
    green: { 
      background: isHovered ? '#166534' : '#DCFCE7',
      color: isHovered ? '#fff' : '#166534'
    },
    red: { 
      background: isHovered ? '#991B1B' : '#FEE2E2',
      color: isHovered ? '#fff' : '#991B1B'
    }
  }

  return (
    <span 
      style={{
        ...colorStyles[color],
        padding: '6px 12px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-block',
        margin: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </span>
  )
}