import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Droplets, Wind, Wrench, BookOpen } from 'lucide-react'
import { SITE_NAME, SITE_URL, OG_IMAGE } from '../constants'
import styles from './Solutions.module.css'

const services = [
  {
    Icon: Droplets,
    title: 'Irrigation systems',
    body: 'Simple river/lake intake or wells for clean, reliable water year-round — regardless of rainfall.',
  },
  {
    Icon: Wind,
    title: 'Drainage systems',
    body: 'Flood protection channels that handle excess rainwater, preventing soil erosion and harvest loss.',
  },
  {
    Icon: Wrench,
    title: 'Technical support',
    body: 'Regular maintenance visits and rapid repairs to keep systems operational season after season.',
  },
  {
    Icon: BookOpen,
    title: 'Farming education',
    body: 'Hands-on training covering irrigation, land management, fertiliser use, and pest control. Included with every installation.',
  },
]

const steps = [
  { n: '01', title: 'Village entry', body: 'Community meeting with local leaders' },
  { n: '02', title: 'Site assessment', body: 'Field visit to your farm' },
  { n: '03', title: 'Installation', body: 'System installed, training begins' },
  { n: '04', title: 'Education', body: 'Structured training sessions in-field' },
  { n: '05', title: 'Ongoing support', body: 'Monthly visits & maintenance' },
]


export default function Solutions() {
  const pageTitle = `Solutions — ${SITE_NAME}`
  const pageDesc = 'Four integrated services delivered to your village: irrigation systems, drainage, technical support, and farming education — all designed for smallholder realities.'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:url" content={`${SITE_URL}/solutions`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">What we offer</span>
          <h1>Four integrated services all delivered to your farm field</h1>
          <p>
            Everything designed for smallholder realities: seasonal income, shared equipment,
            and learning in field — not classroom.
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map(({ Icon, title, body }) => (
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

      {/* <section className={styles.process}>
        <div className="container">
          <span className="section-label">How it works</span>
          <h2>Our 5-step process</h2>
          <div className={styles.steps}>
            {steps.map(({ n, title, body }) => (
              <div key={n} className={styles.step}>
                <div className={styles.stepNum}>{n}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className={styles.payments}>
        <div className="container">
          <span className="section-label">Payment flexibility</span>
          <h2>Built around how farming income actually works</h2>
          <p>
            Harvests are seasonal. Cash is tight before them and better after.
            We offer renting, leasing, after-harvest arrangements, and group options
            for cooperatives so getting water access does not mean going into debt.
            Talk to us and we will find an arrangement that fits your situation.
          </p>
          <Link to="/contact" className={`btn btn-outline ${styles.payBtn}`}>Ask about payment options</Link>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>We'll come to your village and assess your needs no commitment required.</p>
          <Link to="/contact" className="btn btn-gold">Talk to us</Link>
        </div>
      </section>
    </>
  )
}
