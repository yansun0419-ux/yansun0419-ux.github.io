import { Link } from 'react-router-dom'
import './Navigation.css'

/**
 * Navigation Component
 * 
 * Provides navigation links to different pages of the website
 */
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
