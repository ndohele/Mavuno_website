import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SITE_NAME } from '../constants'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — {SITE_NAME}</title>
      </Helmet>
      <section className={styles.page}>
        <div className="container">
          <span className={styles.code}>404</span>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
      </section>
    </>
  )
}
