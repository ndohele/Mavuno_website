import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { TrendingUp, Users, Sprout, Check } from 'lucide-react'
import { SITE_NAME, SITE_URL, OG_IMAGE } from '../constants'
import styles from './GetInvolved.module.css'

export default function GetInvolved() {
  const pageTitle = `Get Involved — ${SITE_NAME}`
  const pageDesc = 'Fund, partner with, or volunteer alongside Mavuno Water Solutions. We are looking for people who want real outcomes in real villages in rural Tanzania.'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:url" content={`${SITE_URL}/get-involved`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Work with us</span>
          <h1>Build with us — from funding to field days</h1>
          <p>
            Whether you invest, partner, or volunteer — we're looking for people who want
            real outcomes in real villages, not glossy reports that end when the project closes.
          </p>
        </div>
      </section>

      <section className={styles.ways}>
        <div className="container">
          <div className={styles.waysGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><TrendingUp size={20} strokeWidth={1.75} /></div>
                <h2>Funders &amp; investors</h2>
              </div>
              <p>
                We are seeking grant or impact investment to expand from Kishinda to 5
                new villages. Every shilling goes toward infrastructure, training, and
                the people who make it work.
              </p>
              <div className={styles.points}>
                {[
                  'Expansion plan tied to village readiness and field milestones',
                  'Progress you can visit and verify on the ground',
                  'Farmer-level impact metrics collected from day one',
                ].map(point => (
                  <div key={point} className={styles.point}>
                    <Check size={14} strokeWidth={2.5} className={styles.pointIcon} />
                    {point}
                  </div>
                ))}
              </div>
              <Link to="/contact?topic=funding" className="btn btn-primary">Discuss funding</Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><Users size={20} strokeWidth={1.75} /></div>
                <h2>NGO &amp; government partners</h2>
              </div>
              <p>
                We are a trusted last-mile implementation partner for water and
                agriculture in Sengerema District. We deliver where others cannot,
                and we stay after project cycles end.
              </p>
              <div className={styles.points}>
                {[
                  'Co-design programs integrating water and agronomy',
                  'Prove impact with real, farmer-level metrics',
                  'Long-term presence beyond project cycles',
                ].map(point => (
                  <div key={point} className={styles.point}>
                    <Check size={14} strokeWidth={2.5} className={styles.pointIcon} />
                    {point}
                  </div>
                ))}
              </div>
              <Link to="/contact?topic=partnership" className="btn btn-primary">Explore partnership</Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><Sprout size={20} strokeWidth={1.75} /></div>
                <h2>Volunteers &amp; community</h2>
              </div>
              <p>
                Join us in the field. We welcome people with practical skills who want
                hands-on, real-world impact alongside Tanzanian farming communities.
              </p>
              <div className={styles.roles}>
                <h3>Open roles</h3>
                {[
                  'Irrigation technicians',
                  'Agricultural trainers',
                  'Community outreach coordinators',
                  'Local ambassadors',
                ].map(role => (
                  <div key={role} className={styles.roleTag}>{role}</div>
                ))}
              </div>
              <Link to="/contact?topic=volunteer" className="btn btn-primary">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.truth}>
        <div className="container">
          <span className="section-label">Partnership ground truth</span>
          <h2>What we expect — and what you can expect from us</h2>
          <div className={styles.truthGrid}>
            <div className={styles.truthCard}>
              <h3>For funders</h3>
              <p>
                A practical expansion plan tied to village readiness, capacity, and
                milestones — not promises. You'll see progress in the field, not just reports.
              </p>
            </div>
            <div className={styles.truthCard}>
              <h3>For institutions</h3>
              <p>
                Co-design programs that integrate water and agronomy, with impact proven
                through farmer-level metrics you can independently verify.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
