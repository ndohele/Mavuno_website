import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin } from 'lucide-react'
import { SITE_NAME, SITE_URL, OG_IMAGE, CONTACT_LOCATION } from '../constants'
import verdiana from '../assets/VERDIANA - COFOUNDER.jpeg'
import theresia from '../assets/THERESIA - COFOUNDER.jpeg'
import abubakar from '../assets/ABUBAKAR - TECHNICAL LEAD.jpeg'
import innocent from '../assets/INNOCENT - FIELD ENGINEER.jpeg'
import styles from './About.module.css'

const team = [
  {
    photo: verdiana,
    name: 'Verdiana Faustine',
    role: 'Co-founder',
  },
  {
    photo: theresia,
    name: 'Theresia Bwana',
    role: 'Co-founder',
  },
  {
    photo: abubakar,
    name: 'Abubakar Mathias',
    role: 'Technical Lead',
  },
  {
    photo: innocent,
    name: 'Innocent Keya',
    role: 'Field Engineer',
  },
]

export default function About() {
  const pageTitle = `About — ${SITE_NAME}`
  const pageDesc = 'Mavuno is a Tanzanian startup built with communities combining practical water infrastructure with hands-on farming education in Sengerema District.'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Who we are</span>
          <h1>Farmers first.<br />Water that works.<br />Support that stays.</h1>
          <p>
            Mavuno is a Tanzanian startup built <em>with</em> communities not for them
            combining practical water infrastructure with hands-on farming education.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={`container ${styles.missionGrid}`}>
          <div className={styles.missionText}>
            <span className="section-label">Our mission</span>
            <h2>Making smallholder farming climate-resilient</h2>
            <p>
              To make smallholder farming in rural Tanzania climate-resilient, productive,
              and financially sustainable by delivering affordable water infrastructure
              and farming knowledge directly to the farmers who need it most.
            </p>
          </div>
          <div className={styles.missionImage} />
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <span className="section-label">Our story</span>
          <h2>Founded to solve a real problem</h2>
          <p>
            We started in Kishinda Village, Sengerema District, Mwanza Region where farmers
            were losing harvests every dry season with no reliable water access. Rather than
            asking farmers to come to us, we built a model that goes to them.
          </p>
          <div className={styles.location}>
            <MapPin size={15} strokeWidth={2} />
            {CONTACT_LOCATION}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <span className="section-label">The team</span>
          <h2>The people behind the work</h2>
          <p className={styles.teamIntro}>
            We work on the ground in Sengerema District not from offices. Every person
            on this team has a direct role in what gets built and who gets served.
          </p>
          <div className={styles.teamGrid}>
            {team.map(({ photo, name, role }) => (
              <div key={name} className={styles.teamCard}>
                <div className={styles.photoWrap}>
                  <img src={photo} alt={`${name}, ${role}`} className={styles.photo} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{name}</h3>
                  <span>{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Ready to work with us?</h2>
          <p>Partner with a team that understands rural Tanzania from the ground up.</p>
          <Link to="/get-involved" className="btn btn-gold">Get involved</Link>
        </div>
      </section>
    </>
  )
}
