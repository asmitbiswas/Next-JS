'use client'

import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput('')
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const completedCount = todos.filter(t => t.completed).length

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '10px',
          fontSize: '48px'
        }}>
          ✅ My Todo List
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          {completedCount} of {todos.length} completed
        </p>

        {/* Input Section */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              style={{
                flex: 1,
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                boxSizing: 'border-box'
              }}
            />
            <button
              onClick={addTodo}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                background: '#10B981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#059669'}
              onMouseOut={(e) => e.currentTarget.style.background = '#10B981'}
            >
              ➕ Add
            </button>
          </div>
        </div>

        {/* Todos List */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          minHeight: '300px'
        }}>
          {todos.length === 0 ? (
            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              opacity: '0.7',
              marginTop: '80px'
            }}>
              No todos yet! Add one to get started 🚀
            </p>
          ) : (
            <div>
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    transition: 'all 0.3s ease',
                    opacity: todo.completed ? '0.6' : '1'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer'
                    }}
                  />

                  {/* Todo Text */}
                  <span style={{
                    flex: 1,
                    fontSize: '16px',
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? '0.6' : '1'
                  }}>
                    {todo.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    style={{
                      padding: '6px 12px',
                      background: '#EF4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#DC2626'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#EF4444'}
                  >
                    🗑️ Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div style={{
            marginTop: '20px',
            background: 'rgba(255,255,255,0.1)',
            padding: '15px',
            borderRadius: '10px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ margin: '5px 0' }}>
              📊 Total: {todos.length} | ✅ Done: {completedCount} | ⏳ Pending: {todos.length - completedCount}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}