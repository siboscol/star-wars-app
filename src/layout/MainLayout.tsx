import { Link, Outlet } from 'react-router-dom'
import { AuthStatus } from '../hooks/useAuth'

export default function MainLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery Page</Link>
        </li>
        <li>
          <Link to="/planets">Planets Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
