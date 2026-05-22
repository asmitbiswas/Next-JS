'use client'

import { useState } from 'react'

interface Card {
  id: number
  title: string
  value: number
  icon: string
  color: string
  trend: number
}

export default function Dashboard() {
  const [user, setUser] = useState('Asmit')
  const [inputName, setInputName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const [cards] = useState<Card[]>([
    {
      id: 1,
      title: 'Total Users',
      value: 1250,
      icon: '👥',
      color: '#3B82F6',
      trend: 12
    },
    {
      id: 2,
      title: 'Revenue',
      value: 45000,
      icon: '💰',
      color: '#10B981',
      trend: 8
    },
    {
      id: 3,
      title: 'Orders',
      value: 320,
      icon: '📦',
      color: '#F59E0B',
      trend: 5
    },
    {
      id: 4,
      title: 'Visitors',
      value: 8900,
      icon: '📈',
      color: '#EF4444',
      trend: -3
    }
  ])

  const [hoveredId, setHoveredId] = useState(null)

  const handleSetUsername = () => {
    if (inputName.trim()) {
      setUser(inputName)
      setInputName('')
      setIsEditing(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '40px 20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              margin: '0',
              fontWeight: 'bold'
            }}>
              📊 Dashboard
            </h1>
            
            {/* Edit Username Button */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                padding: '8px 16px',
                background: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#1E40AF'}
              onMouseOut={(e) => e.currentTarget.style.background = '#3B82F6'}
            >
              {isEditing ? '❌ Cancel' : '✏️ Edit Name'}
            </button>
          </div>

          {/* Username Input Section */}
          {isEditing && (
            <div style={{
              marginTop: '20px',
              display: 'flex',
              gap: '10px',
              background: 'rgba(255,255,255,0.05)',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <input
                type="text"
                placeholder="Enter your name..."
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSetUsername()}
                style={{
                  flex: 1,
                  padding: '10px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: 'none',
                  color: '#000'
                }}
              />
              <button
                onClick={handleSetUsername}
                style={{
                  padding: '10px 20px',
                  background: '#10B981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#059669'}
                onMouseOut={(e) => e.currentTarget.style.background = '#10B981'}
              >
                ✅ Save
              </button>
            </div>
          )}

          {/* Welcome Message */}
          <p style={{
            fontSize: '16px',
            opacity: '0.7',
            margin: '15px 0 0 0'
          }}>
            Welcome back, <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>{user}</span>! Here's your performance overview.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `2px solid ${card.color}`,
                padding: '25px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: hoveredId === card.id ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredId === card.id ? `0 10px 30px ${card.color}33` : 'none'
              }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                {card.icon}
              </div>

              <h3 style={{
                fontSize: '14px',
                opacity: '0.7',
                margin: '0 0 10px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '0 0 10px 0'
              }}>
                {card.value.toLocaleString()}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: card.trend > 0 ? '#10B981' : '#EF4444'
              }}>
                <span>{card.trend > 0 ? '📈' : '📉'}</span>
                <span>{Math.abs(card.trend)}% {card.trend > 0 ? 'increase' : 'decrease'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Section */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '25px',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{ marginTop: '0', marginBottom: '20px', fontSize: '18px' }}>
            🔔 Recent Activity
          </h3>

          <div>
            {[
              { icon: '✅', text: 'New order received from John', time: '2 min ago' },
              { icon: '👤', text: 'New user registered', time: '15 min ago' },
              { icon: '💳', text: 'Payment processed successfully', time: '1 hour ago' },
              { icon: '📧', text: 'Email campaign sent', time: '3 hours ago' },
              { icon: '⚙️', text: 'System maintenance completed', time: 'Yesterday' }
            ].map((activity, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '15px 0',
                  borderBottom: idx !== 4 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}
              >
                <span style={{ fontSize: '24px' }}>{activity.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px 0' }}>{activity.text}</p>
                  <p style={{ margin: '0', fontSize: '12px', opacity: '0.6' }}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '14px',
          opacity: '0.7'
        }}>
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  )
}