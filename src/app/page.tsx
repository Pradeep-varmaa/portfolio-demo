'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import style from './page.module.css'
import { message } from 'antd'
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiMysql } from "react-icons/si";
import { useRouter } from 'next/navigation';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, GithubOutlined, LinkOutlined, CodeOutlined } from "@ant-design/icons"
import CursorLight from './components/CursorLight'
import GlassBubbles from './components/GlassBubbles'

/* ── Scroll-reveal hook ─────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(style.revealed)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Reveal wrapper ─────────────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`${style.reveal} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ── Floating particle ──────────────────────────────────── */
function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    })),
  [])
  return (
    <div className={style.particles}>
      {particles.map((p) => (
        <span
          key={p.id}
          className={style.particle}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Tech skill card ────────────────────────────────────── */
function SkillCard({
  icon,
  label,
  color,
  delay,
}: {
  icon: React.ReactNode
  label: string
  color: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div className={style.skillCard} style={{ '--accent': color } as React.CSSProperties}>
        <div className={style.skillIcon}>{icon}</div>
        <span className={style.skillLabel}>{label}</span>
      </div>
    </Reveal>
  )
}

/* ── Main page ──────────────────────────────────────────── */
const Homepage = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')
  const [data, setData] = useState<any>([])
  const [activeSection, setActiveSection] = useState('home')

  async function GetData() {
    const req = await fetch('/api/data')
    const res = await req.json()
    setData(res.response)
  }

  useEffect(() => {
    async function InsertIp() {
      await fetch('/api/get')
    }
    InsertIp()
    GetData()
  }, [])

  /* Active nav highlight on scroll */
  useEffect(() => {
    const sections = ['home', 'about', 'project', 'contact']
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const submitform = async (e: React.FormEvent) => {
    e.preventDefault()
    const req = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, mail, msg }),
    })
    const res = await req.json()
    setMail('')
    setMsg('')
    setName('')
    res.success
      ? message.success('We Received Your Request')
      : message.error('Something Went Wrong!')
  }

  return (
    <section className={style.global}>
      {/* ── Cursor light + bubbles (global) ── */}
      <CursorLight />
      <Particles />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className={style.homepage} id="home">
        <GlassBubbles />

        <section className={style.header}>
          {['home', 'about', 'project', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? style.activeNav : ''}
            >
              {id === 'project' ? 'Projects' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </section>

        <div className={style.container_div}>
          <section className={style.left_container}>
            <Reveal>
              <span className={style.greeting}>Hello, I&apos;m</span>
            </Reveal>
            <Reveal delay={100}>
              <h1>Pradeep Varma</h1>
            </Reveal>
            <Reveal delay={200}>
              <h3 className={style.typed}>Full Stack Developer</h3>
            </Reveal>
            <Reveal delay={300}>
              <p className={style.heroDesc}>
                A Passionated Full-Stack Developer with expertise in Next.js, React,
                Express.js, and Python — passionate about building scalable and
                user-friendly web applications.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className={style.heroBtns}>
                <a className={style.contact_btn} href="#contact">
                  Contact Me
                </a>
                <a className={style.outlineBtn} href="#project">
                  View Projects
                </a>
              </div>
            </Reveal>
          </section>

          <section className={style.right_container}>
            <Reveal delay={200}>
              <div className={style.imgWrapper}>
                <div className={style.imgGlow} />
                <img src="/mypic-removebg-preview.png" alt="Pradeep Varma" />
              </div>
            </Reveal>
          </section>
        </div>

        <div className={style.scrollIndicator}>
          <div className={style.mouse}>
            <div className={style.mouseWheel} />
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className={style.aboutsection} id="about">
        <div className={style.grid_bg} />

        <Reveal>
          <h1 className={style.headings}>About Me</h1>
        </Reveal>

        <Reveal delay={100}>
          <p className={style.aboutText}>
            I am a motivated Full-Stack Developer with expertise in Next.js, React,
            Express.js, and Python, passionate about building scalable and user-friendly
            web applications. I enjoy transforming ideas into real digital solutions with
            clean architecture and intuitive interfaces.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className={style.aboutText}>
            My focus is on creating responsive front-end experiences combined with efficient
            back-end logic, databases, and authentication systems. I follow best practices
            to write clean, maintainable, and performance-oriented code.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className={style.aboutText}>
            As an IEEE member and a Kabaddi team lead, I have developed leadership,
            teamwork, and communication skills that help me collaborate effectively in
            professional environments.
          </p>
        </Reveal>

        {/* ── Skill cards ── */}
        <div className={style.skillsGrid}>
          <SkillCard icon={<SiNextdotjs />} label="Next.js" color="#036c0c" delay={0} />
          <SkillCard icon={<SiJavascript />} label="JavaScript" color="#F7DF1E" delay={50} />
          <SkillCard icon={<FaReact />} label="React" color="#61DAFB" delay={100} />
          <SkillCard icon={<FaPython />} label="Python" color="#3776AB" delay={150} />
          <SkillCard icon={<FaHtml5 />} label="HTML5" color="#E34F26" delay={200} />
          <SkillCard icon={<FaCss3Alt />} label="CSS3" color="#1572B6" delay={250} />
          <SkillCard icon={<SiMysql />} label="MySQL" color="#4479A1" delay={300} />
          <SkillCard icon={<FaDatabase />} label="Database" color="#336791" delay={350} />
          <SkillCard icon={<CodeOutlined />} label="Linux" color="#ffffff" delay={400} />
        </div>

        {/* ── Orbiting logos ── */}
        <div className={style.container}>
          <div className={style.sigma_ball}>
            <div className={style.sigma}>∑</div>
          </div>
          <div className={`${style.icon} ${style.icon_next}`}><SiNextdotjs /></div>
          <div className={`${style.icon} ${style.icon_js}`}><SiJavascript /></div>
          <div className={`${style.icon} ${style.icon_python}`}><SiMysql /></div>
          <div className={`${style.icon} ${style.icon_linux}`}><CodeOutlined /></div>
          <div className={`${style.icon} ${style.icon_python}`}><FaPython /></div>
          <div className={`${style.icon} ${style.icon_react}`}><FaReact /></div>
          <div className={`${style.icon} ${style.icon_html}`}><FaHtml5 /></div>
          <div className={`${style.icon} ${style.icon_css}`}><FaCss3Alt /></div>
          <div className={`${style.icon} ${style.icon_python}`}><FaDatabase /></div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section className={style.projects} id="project">
        <Reveal>
          <h1 className={style.headings}>Recent Works</h1>
        </Reveal>

        {/* Project 1 */}
        <div className={style.project_div}>
          <Reveal className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 1</h5>
            <h2>IDF Diabetes Education</h2>
            <div className={style.project_card}>
              <p>
                Developed and maintained the official web platform for the IDF Diabetes
                Education initiative under the International Diabetes Federation. Built
                responsive and user-friendly interfaces to deliver educational content
                effectively across devices. Integrated backend functionalities to manage
                program data, user interactions, and content updates. Enhanced accessibility
                and performance to support large-scale awareness and engagement in diabetes
                education.
              </p>
            </div>
          </Reveal>
          <Reveal className={style.imageReveal}>
            <img className={style.image} src="/IDF_PRIMARY1.png" alt="IDF Project" />
          </Reveal>
        </div>

        {/* Project 2 */}
        <div className={style.project_div}>
          <Reveal className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 2</h5>
            <h2>Weather Forecast</h2>
            <div className={style.project_card}>
              <p>
                A responsive Weather Forecast web application using HTML, CSS, and
                JavaScript integrated with real-time weather APIs. Implemented dynamic UI
                updates to display live temperature, humidity, and weather conditions based
                on user location. Utilized API data handling and asynchronous JavaScript for
                seamless data retrieval.
              </p>
            </div>
            <div className={style.icons}>
              <a href="https://github.com/Pradeep-varmaa/weather-checking" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
              <a href="https://weather-forcasting-opal.vercel.app/" target="_blank" rel="noopener noreferrer"><LinkOutlined /></a>
            </div>
          </Reveal>
          <Reveal className={style.imageReveal}>
            <img className={style.image} src="/weather.webp" alt="Weather Project" />
          </Reveal>
        </div>

        {/* Project 3 */}
        <div className={style.project_div}>
          <Reveal className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 3</h5>
            <h2>Track My Location</h2>
            <div className={style.project_card}>
              <p>
                A location tracking feature using the browser Geolocation API to fetch the
                user&apos;s real-time coordinates on button interaction. Integrated Maps to
                dynamically display the user&apos;s current location on an interactive map.
                Designed a user-friendly interface with proper permission handling and error
                management for enhanced usability and reliability.
              </p>
            </div>
            <div className={style.icons}>
              <a href="https://github.com/Pradeep-varmaa/Myrepo" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
              <a href="https://my-location-one.vercel.app/" target="_blank" rel="noopener noreferrer"><LinkOutlined /></a>
            </div>
          </Reveal>
          <Reveal className={style.imageReveal}>
            <img className={style.image} src="/location.webp" alt="Location Project" />
          </Reveal>
        </div>

        {/* Project 4 */}
        <div className={style.project_div}>
          <Reveal className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 4</h5>
            <h2>English Dictionary</h2>
            <div className={style.project_card}>
              <p>
                An interactive English Dictionary web application that allows users to search
                and retrieve word meanings instantly. Integrated a real-time dictionary API to
                fetch definitions, phonetics, and usage details dynamically. Designed a
                responsive and intuitive UI to enhance user experience across different
                devices.
              </p>
            </div>
            <div className={style.icons}>
              <a href="https://github.com/Pradeep-varmaa/English-dictionary" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
              <a href="https://english-dictionary-silk.vercel.app" target="_blank" rel="noopener noreferrer"><LinkOutlined /></a>
            </div>
          </Reveal>
          <Reveal className={style.imageReveal}>
            <img className={style.image} src="/dictionary.jpg" alt="Dictionary Project" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section className={style.contact} id="contact">
        <Reveal>
          <h1 className={style.headings}>Get In Touch</h1>
        </Reveal>

        <section className={style.contact_container}>
          <div className={style.address_div}>
            <Reveal>
              <h2 className={style.contactSubtitle}>Drop me a message</h2>
            </Reveal>
            <Reveal delay={100}>
              <p>
                I&apos;m always open to discussing new opportunities, innovative projects,
                and meaningful collaborations. Whether you&apos;re looking to build a modern
                web application, develop scalable software solutions, or simply connect and
                share ideas, I&apos;d be glad to hear from you.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className={style.contactInfo}>
                <div className={style.social_icons}>
                  <PhoneOutlined /> +91 9618795584
                </div>
                <div className={style.social_icons}>
                  <MailOutlined />{' '}
                  <a href="mailto:ppvarma07@gmail.com" target="_blank" rel="noopener noreferrer">
                    ppvarma07@gmail.com
                  </a>
                </div>
                <div className={style.social_icons}>
                  <EnvironmentOutlined /> Raghavendhra colony C-Block, Kondapur, Hyderabad
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className={style.logs}>
                Total Visits : {data.length}
                <button className={style.log_btn} onClick={() => router.push('/track-visits')}>
                  View Logs
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className={style.contact_form}>
              <form onSubmit={submitform}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Johndoe@mail.com"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button type="submit" className={style.contact_btn}>
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </section>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className={style.footer}>
        <p>&copy; {new Date().getFullYear()} Pradeep Varma. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Homepage
