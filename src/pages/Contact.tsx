import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, AtSign, CheckCircle } from 'lucide-react'
import {
  SITE_NAME, SITE_URL, OG_IMAGE,
  CONTACT_EMAIL, CONTACT_WHATSAPP, CONTACT_WHATSAPP_LINK,
  CONTACT_INSTAGRAM, CONTACT_INSTAGRAM_LINK, CONTACT_LOCATION,
} from '../constants'
import styles from './Contact.module.css'

const PERSONA_MAP: Record<string, string> = {
  funding: 'Funder/Investor',
  partnership: 'NGO/Partner',
  volunteer: 'Volunteer',
}

const PERSONAS = ['Farmer', 'Funder/Investor', 'NGO/Partner', 'Volunteer', 'Journalist', 'Other']

type Status = 'idle' | 'sent' | 'no-client'

export default function Contact() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const selectRef = useRef<HTMLSelectElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const topic = params.get('topic') ?? ''
    const mapped = PERSONA_MAP[topic]
    if (mapped && selectRef.current) selectRef.current.value = mapped
  }, [params])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const contact = fd.get('contact') as string
    const persona = fd.get('persona') as string
    const message = fd.get('message') as string

    const subject = encodeURIComponent(`[Mavuno] Message from ${name} (${persona})`)
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nI am a: ${persona}\n\nMessage:\n${message}`
    )
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    // Detect whether an email client opened by checking if the page loses focus
    let clientOpened = false
    const onBlur = () => { clientOpened = true }
    window.addEventListener('blur', onBlur)

    window.location.href = mailto

    setTimeout(() => {
      window.removeEventListener('blur', onBlur)
      if (clientOpened) {
        setStatus('sent')
        formRef.current?.reset()
      } else {
        setStatus('no-client')
      }
    }, 600)
  }

  const pageTitle = `Contact — ${SITE_NAME}`
  const pageDesc = `Reach Mavuno Water Solutions by email, WhatsApp, or the contact form. Based in ${CONTACT_LOCATION}.`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Reach us</span>
          <h1>Let's talk — farmer to farmer, partner to partner</h1>
          <p>Send us a message and we'll respond from the field. For quick questions, WhatsApp works great.</p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.formWrap}>
            <h2>Send a message</h2>

            {status === 'sent' && (
              <div className={styles.successBanner}>
                <CheckCircle size={18} strokeWidth={2} />
                <span>Message opened in your email client — we'll get back to you soon.</span>
              </div>
            )}

            {status === 'no-client' && (
              <div className={styles.fallbackBanner}>
                <p>No email app found. You can reach us directly:</p>
                <div className={styles.fallbackActions}>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline">
                    <Mail size={15} /> Email us
                  </a>
                  <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <Phone size={15} /> WhatsApp
                  </a>
                </div>
                <button className={styles.retryLink} onClick={() => setStatus('idle')}>Try the form again</button>
              </div>
            )}

            {status === 'idle' && (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" required placeholder="e.g. Amina Juma" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact">Email or phone</label>
                  <input id="contact" name="contact" type="text" required placeholder="+255 or your email" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="persona">I am a</label>
                  <select id="persona" name="persona" ref={selectRef} required>
                    <option value="">Select…</option>
                    {PERSONAS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us what you're working on or what you need…" />
                </div>
                <button type="submit" className="btn btn-primary">Send message</button>
              </form>
            )}
          </div>

          <div className={styles.info}>
            <h2>Find us</h2>
            <div className={styles.details}>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.detail}>
                <div className={styles.detailIcon}><Mail size={16} strokeWidth={1.75} /></div>
                <div>
                  <strong>Email</strong>
                  <span>{CONTACT_EMAIL}</span>
                </div>
              </a>
              <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.detail}>
                <div className={styles.detailIcon}><Phone size={16} strokeWidth={1.75} /></div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>{CONTACT_WHATSAPP}</span>
                </div>
              </a>
              <a href={CONTACT_INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className={styles.detail}>
                <div className={styles.detailIcon}><AtSign size={16} strokeWidth={1.75} /></div>
                <div>
                  <strong>Instagram</strong>
                  <span>{CONTACT_INSTAGRAM}</span>
                </div>
              </a>
              <div className={`${styles.detail} ${styles.detailStatic}`}>
                <div className={styles.detailIcon}><MapPin size={16} strokeWidth={1.75} /></div>
                <div>
                  <strong>Location</strong>
                  <span>{CONTACT_LOCATION}</span>
                </div>
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="Sengerema District map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=32.5%2C-2.2%2C33.1%2C-1.6&layer=mapnik"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
