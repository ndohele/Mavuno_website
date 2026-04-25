import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/impact', label: 'Impact' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`} ref={navRef}>
        <Link to="/" className={styles.brand}>
          <img src="/logo.svg" alt="" width={40} height={40} />
          <span>Mavuno</span>
        </Link>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(p => !p)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Main">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className={`btn btn-gold ${styles.cta}`} onClick={() => setOpen(false)}>
            Partner with us
          </Link>
        </nav>
      </div>
    </header>
  )
}
