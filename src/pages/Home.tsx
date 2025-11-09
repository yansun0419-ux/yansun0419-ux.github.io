import { useState } from 'react'
import './Home.css'

/**
 * Home Page Component
 * 
 * The main landing page of the website
 */
function Home() {
  // State to track button click count
  const [count, setCount] = useState(0)

  // Handle button click - increment counter
  const handleCountIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className="home">
      {/* Website Header */}
      <header>
        <h1>Hello, World!</h1>
        <p>Welcome to my personal website</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2>This is my personal homepage</h2>
          <p>A modern website built with React + TypeScript + Vite</p>
        </section>

        {/* Interactive Counter Section */}
        <section className="counter">
          <button onClick={handleCountIncrement}>
            Click count: {count}
          </button>
        </section>
      </main>

      {/* Website Footer */}
      <footer>
        <p>© 2025 My Personal Website</p>
      </footer>
    </div>
  )
}

export default Home
