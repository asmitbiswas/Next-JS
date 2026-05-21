'use client'

import { useState } from 'react'

export default function WeatherApp() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Using Open-Meteo API (free, no key needed)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      )
      const geoData = await geoRes.json()

      if (!geoData.results || geoData.results.length === 0) {
        setError('City not found!')
        setLoading(false)
        return
      }

      const { latitude, longitude, name, country } = geoData.results[0]

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
      )
      const weatherData = await weatherRes.json()

      setWeather({
        city: name,
        country: country,
        current: weatherData.current,
        daily: weatherData.daily
      })
    } catch (err) {
      setError('Error fetching weather data')
    }
    
    setLoading(false)
  }

  const getWeatherEmoji = (code) => {
    if (code === 0) return '☀️'
    if (code === 1 || code === 2) return '🌤️'
    if (code === 3) return '☁️'
    if (code === 45 || code === 48) return '🌫️'
    if (code === 51 || code === 53 || code === 55) return '🌧️'
    if (code === 61 || code === 63 || code === 65) return '🌧️'
    if (code === 71 || code === 73 || code === 75) return '❄️'
    if (code === 80 || code === 81 || code === 82) return '⛈️'
    return '🌦️'
  }

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
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '48px' }}>
          🌍 Weather Forecast
        </h1>

        {/* Search Section */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          marginBottom: '30px'
        }}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />
          
          <button
            onClick={fetchWeather}
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              background: loading ? '#999' : '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? '⏳ Loading...' : '🔍 Search'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#EF4444',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Weather Display */}
        {weather && (
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            
            {/* Current Weather */}
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '32px', margin: '0 0 20px 0' }}>
                📍 {weather.city}, {weather.country}
              </h2>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                background: 'rgba(255,255,255,0.1)',
                padding: '20px',
                borderRadius: '10px'
              }}>
                <div>
                  <p style={{ fontSize: '48px', margin: '0' }}>
                    {getWeatherEmoji(weather.current.weather_code)}
                  </p>
                </div>
                
                <div>
                  <p style={{ fontSize: '56px', margin: '0', fontWeight: 'bold' }}>
                    {Math.round(weather.current.temperature_2m)}°C
                  </p>
                  <p style={{ fontSize: '16px', margin: '5px 0 0 0' }}>
                    💨 Wind: {Math.round(weather.current.wind_speed_10m)} km/h
                  </p>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div>
              <h3 style={{ marginBottom: '15px' }}>📅 7-Day Forecast</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                gap: '10px'
              }}>
                {weather.daily.time.slice(0, 7).map((date, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '10px',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '12px', margin: '0 0 8px 0' }}>
                      {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </p>
                    <p style={{ fontSize: '24px', margin: '8px 0' }}>
                      {getWeatherEmoji(weather.daily.weather_code[idx])}
                    </p>
                    <p style={{ fontSize: '12px', margin: '8px 0 0 0' }}>
                      {Math.round(weather.daily.temperature_2m_max[idx])}°
                    </p>
                    <p style={{ fontSize: '10px', margin: '4px 0 0 0', opacity: '0.8' }}>
                      {Math.round(weather.daily.temperature_2m_min[idx])}°
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Initial State */}
        {!weather && !loading && !error && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '15px'
          }}>
            <p style={{ fontSize: '24px', margin: '0' }}>
              Enter a city name to see the weather! 🌤️
            </p>
          </div>
        )}
      </div>
    </div>
  )
}