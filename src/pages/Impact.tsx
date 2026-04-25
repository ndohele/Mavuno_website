import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SITE_NAME, SITE_URL, OG_IMAGE } from '../constants'
import styles from './Impact.module.css'

const work = [
  {
    title: 'Irrigation systems in the ground',
    body: 'Working systems delivering reliable water to farms in Kishinda Village — regardless of rainfall or season.',
  },
  {
    title: 'Farmers trained, not just equipped',
    body: 'Every installation comes with hands-on education: how to operate, maintain, and get the most from the system year-round.',
  },
  {
    title: 'Drainage protecting harvests',
    body: 'Flood channels that carry excess water away from crops during heavy rains, preventing the losses that set families back.',
  },
  {
    title: 'Ongoing support, not a one-off project',
    body: 'We visit monthly. We fix problems fast. Farmers are not left alone with equipment they don\'t understand.',
  },
]

const sdgs = [
  { num: '1', label: 'No Poverty', body: 'Stronger, stable farm incomes season over season', color: '#e5243b' },
  { num: '2', label: 'Zero Hunger', body: 'Year-round food production, not rain-dependent harvests', color: '#dda63a' },
  { num: '6', label: 'Clean Water', body: 'Safe, dependable water access for farming families', color: '#26bde2' },
  { num: '13', label: 'Climate Action', body: 'Resilience built into farms so drought does not mean disaster', color: '#3f7e44' },
]

export default function Impact() {
  const pageTitle = `Impact — ${SITE_NAME}`
  const pageDesc = 'Mavuno is active in Kishinda Village, Sengerema District — building irrigation systems, training farmers, and staying to make sure it works long after installation.'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:url" content={`${SITE_URL}/impact`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Where we work</span>
          <h1>Active in Kishinda Village,<br />Sengerema District</h1>
          <p>
            We are on the ground in Mwanza Region — installing systems, training farmers,
            and staying long after the work is done.
          </p>
        </div>
      </section>

      <section className={styles.work}>
        <div className="container">
          <span className="section-label">What we have built</span>
          <h2>Work done, not work planned</h2>
          <div className={styles.workGrid}>
            {work.map(({ title, body }) => (
              <div key={title} className={styles.workCard}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.growing}>
        <div className="container">
          <span className="section-label">Where we are going</span>
          <h2>Growing one village at a time</h2>
          <p>
            We started in Kishinda because we knew it well. The plan is not to scale fast —
            it is to do it properly. Each new village gets the same attention: a real assessment,
            a system that fits the land, and support that continues after installation.
          </p>
          <p>
            Next: five more villages in Sengerema District. After that, Mwanza Region.
            We go where the need is greatest and where we can do the work well.
          </p>
        </div>
      </section>

      <section className={styles.measure}>
        <div className="container">
          <span className="section-label">How we measure what matters</span>
          <h2>We track outcomes, not outputs</h2>
          <p>
            Activity counts — systems installed, trainings held — are easy to report and easy
            to inflate. What we care about is whether farmers grow more, lose less, and earn
            better. That is what we track, farm by farm.
          </p>
        </div>
      </section>

      <section className={styles.sdg}>
        <div className="container">
          <span className="section-label">Wider alignment</span>
          <h2>Contributing to global goals</h2>
          <div className={styles.sdgGrid}>
            {sdgs.map(({ num, label, body, color }) => (
              <div key={num} className={styles.sdgCard} style={{ '--sdg-color': color } as React.CSSProperties}>
                <span className={styles.sdgNum}>SDG {num}</span>
                <h3>{label}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Want to see the work for yourself?</h2>
          <p>We welcome partners and funders to visit Kishinda and see what we have built.</p>
          <Link to="/contact" className="btn btn-gold">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
