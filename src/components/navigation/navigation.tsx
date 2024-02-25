import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './nav-item'

const menuItems = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Dashboard', href: '/dashboard', icon: BarChart },
  { title: 'Projects', href: '/projects', icon: SquareStack },
  { title: 'Tasks', href: '/tasks', icon: CheckSquare },
  { title: 'Reporting', href: '/reporting', icon: Flag },
  { title: 'Users', href: '/users', icon: Users },
] as const

export function Navigation() {
  return (
    <nav className={'space-y-0.5'}>
      {menuItems.map((item) => (
        <NavItem key={item.title} title={item.title} icon={item.icon} />
      ))}
    </nav>
  )
}
