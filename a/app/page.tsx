'use client'

export default function SimpleUI() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ fontSize: '48px', margin: '0' }}>
        👋 Hello, Asmit!
      </h1>
      <p style={{ fontSize: '18px', opacity: '0.9', margin: '0' }}>
        Simple UI Component
      </p>
      <button style={{
        padding: '12px 30px',
        fontSize: '16px',
        background: '#10B981',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Click Me
      </button>
    </div>
  )
}