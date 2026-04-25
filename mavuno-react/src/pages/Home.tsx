import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Navigation, Wallet, Shield } from 'lucide-react'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, OG_IMAGE } from '../constants'
import styles from './Home.module.css'

const features = [
  {
    Icon: Navigation,
    title: 'We come to you',
    body: 'Field visits and demo plots in your village. Full support without any travel required.',
  },
  {
    Icon: Wallet,
    title: 'Flexible payments',
    body: 'Seasonal renting, leasing, after-harvest equity, or cooperative group sharing.',
  },
  {
    Icon: Shield,
    title: 'We stay after installation',
    body: 'Long-term technical support and ongoing farming education — season after season.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME} — {SITE_DESCRIPTION.split('—')[0].trim()}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={`${SITE_NAME} — Reliable water, thriving farms`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} — Reliable water, thriving farms`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label">Sengerema District · Tanzania</span>
          <h1>Reliable water.<br />Thriving farms.<br />Happy families.</h1>
          <p>Irrigation · Drainage · Education · Technical Support</p>
          <div className={styles.heroBtns}>
            <Link to="/solutions" className="btn btn-gold">How we work</Link>
            <Link to="/get-involved" className="btn btn-outline-white">Partner with us</Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <span className="section-label">Why Mavuno</span>
          <h2 className={styles.sectionTitle}>Built for smallholder realities</h2>
          <div className={styles.featGrid}>
            {features.map(({ Icon, title, body }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className="container">
          <blockquote className={styles.blockquote}>
            <p>"Before Mavuno, we depended entirely on rain. Now we grow year-round."</p>
            <cite>— Farmer, Kishinda Village</cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="section-label">Get involved</span>
            <h2>Join us in ending crop failure in rural Tanzania</h2>
            <p>If you're a farmer, partner, or supporter — we'd love to build with you.</p>
            <Link to="/contact" className="btn btn-gold">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
