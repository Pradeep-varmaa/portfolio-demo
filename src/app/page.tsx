'use client'

import React, { useState, useEffect } from 'react'
import style from './page.module.css'
import {message} from 'antd'
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiMysql } from "react-icons/si";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, GithubOutlined, LinkOutlined, CodeOutlined } from "@ant-design/icons"

const Homepage = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    async function InsertIp() {
      const req = await fetch('/api/get')
    }
    InsertIp()
  }, [])

  const submitform = async (e:React.FormEvent)=>{
    e.preventDefault()

    const req = await fetch('/api/send-mail',{
      method:"POST",
      headers:{
        'content-type' : "application/json"
      },
      body:JSON.stringify({name, mail, msg})
    })
    const res = await req.json()
    setMail('')
    setMsg('')
    setName('')
    res.success? message.success("We Received Your Request") : message.error("Something Went Wrong!")
  }
  return (
    <section className={style.global}>
      <section className={style.homepage} id='home'>
        <section className={style.header}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </section>

        <div className={style.container_div}>
          <section className={style.left_container}>
            <h1>Hi, I'm Pradeep Varma</h1>
            <h3>Full Stack Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolor expedita quae perferendis nobis minus. Provident tempora aspernatur magni adipisci nostrum, labore totam tempore maiores dignissimos exercitationem voluptatum eaque soluta.</p>
            <a className={style.contact_btn} href='#contact'>Contact</a>
          </section>
          <section className={style.right_container}>
            <img src="/picture-nobg.png" alt="" />
          </section>

        </div>
      </section>

      <section className={style.aboutsection} id='about'>
        <div className={style.about_det}>
          <div className={style.grid_bg}></div>
          <h1 className={style.headings}>
            About
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quod laboriosam reiciendis itaque exercitationem odit, sunt dolor maiores architecto veritatis harum et odio. Nihil ab quo rerum iste quia perferendis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur adipisci quae ea consequuntur, unde et asperiores temporibus, enim nobis quo, modi nam vel quas tenetur accusamus dolorem provident repellat? Doloremque.
          </p>
        </div>
        <div className={style.skills}>
          <div className={style.skills_icons}>
            <div className={style.skills_icons_div}>
              <div className={style.icon_python}><FaPython /></div>
              <div className={style.icon_react}><FaReact /></div>
              <div className={style.icon_html}><FaHtml5 /></div>
              <div className={style.icon_css}><FaCss3Alt /></div>
              <div className={style.icon_python}><FaDatabase /></div>
            </div>
            <div className={style.skills_icons_div}>
              <div className={style.icon_next}><SiNextdotjs /></div>
              <div className={style.icon_js}><SiJavascript /></div>
              <div className={style.icon_python}><SiMysql /></div>
              <div className={style.icon_linux}><CodeOutlined /></div>
            </div>
          </div>

          <div className={style.container}>

            <div className={`${style.icon} ${style.icon_next}`}><SiNextdotjs /></div>
            <div className={`${style.icon} ${style.icon_js}`}><SiJavascript /></div>
            <div className={`${style.icon} ${style.icon_python}`}><SiMysql /></div>
            <div className={`${style.icon} ${style.icon_linux}`}><CodeOutlined /></div>
            <div className={`${style.icon} ${style.icon_python}`}><FaPython /></div>
            <div className={`${style.icon} ${style.icon_react}`}><FaReact /></div>
            <div className={`${style.icon} ${style.icon_html}`}><FaHtml5 /></div>
            <div className={`${style.icon} ${style.icon_css}`}><FaCss3Alt /></div>
            <div className={`${style.icon} ${style.icon_python}`}><FaDatabase /></div>

            <div className={style.sigma_ball}>
              <div className={style.sigma}>∑</div>
            </div>

          </div>
        </div>
      </section>

      <section className={style.projects} id='project'>
        <h1 className={style.headings}>
          Recent Works
        </h1>
        <div className={style.project_div}>
          <div className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 1</h5>
            <h2>IDF Diabetes Education</h2>

            <div className={style.project_card}>
              <p>
                Developed and maintained the official web platform for the IDF Diabetes Education initiative under the International Diabetes Federation.
                Built responsive and user-friendly interfaces to deliver educational content effectively across devices.
                Integrated backend functionalities to manage program data, user interactions, and content updates.
                Enhanced accessibility and performance to support large-scale awareness and engagement in diabetes education.
              </p>
            </div>

            <div className={style.icons}>
              <a href="#"><GithubOutlined /></a>
              <a href="#"><LinkOutlined /></a>
            </div>
          </div>

          <img className={style.image} src="/IDF_PRIMARY1.png" alt="" />
        </div>
        <div className={style.project_div}>
          <div className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 2</h5>
            <h2>Weather Forcaste</h2>

            <div className={style.project_card}>
              <p>
                A responsive Weather Forecast web application using HTML, CSS, and JavaScript integrated with real-time weather APIs.
                Implemented dynamic UI updates to display live temperature, humidity, and weather conditions based on user location.
                Utilized API data handling and asynchronous JavaScript (fetch/async-await) for seamless data retrieval.
                Designed an intuitive and user-friendly interface to enhance user experience across devices.
              </p>
            </div>

            <div className={style.icons}>
              <a href="#"><GithubOutlined /></a>
              <a href="#"><LinkOutlined /></a>
            </div>
          </div>

          <img className={style.image} src="/weather.webp" alt="" />
        </div>
        <div className={style.project_div}>
          <div className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 3</h5>
            <h2>Track My Location</h2>

            <div className={style.project_card}>
              <p>
                A location tracking feature using the browser Geolocation API to fetch the user’s real-time coordinates on button interaction.
                Integrated Maps to dynamically display the user’s current location on an interactive map.
                Implemented asynchronous JavaScript (fetch & navigator.geolocation) to ensure accurate and seamless location retrieval.
                Designed a user-friendly interface with proper permission handling and error management for enhanced usability and reliability.
              </p>
            </div>

            <div className={style.icons}>
              <a href="#"><GithubOutlined /></a>
              <a href="#"><LinkOutlined /></a>
            </div>
          </div>

          <img className={style.image} src="/location.webp" alt="" />
        </div>
        <div className={style.project_div}>
          <div className={style.project_subdiv}>
            <h5 className={style.featured}>Project : 4</h5>
            <h2>English Dictionary</h2>

            <div className={style.project_card}>
              <p>
                An interactive English Dictionary web application that allows users to search and retrieve word meanings instantly.
                Integrated a real-time dictionary API to fetch definitions, phonetics, and usage details dynamically.
                Implemented asynchronous JavaScript (fetch/async-await) for fast and seamless data retrieval based on user input.
                Designed a responsive and intuitive UI to enhance user experience across different devices.
              </p>
            </div>

            <div className={style.icons}>
              <a href="#"><GithubOutlined /></a>
              <a href="#"><LinkOutlined /></a>
            </div>
          </div>

          <img className={style.image} src="/dictionary.jpg" alt="" />
        </div>
        {/* <div className={style.project_div}>
          <div className={style.project_subdiv}>
            <h5 className={style.featured}>Featured Project</h5>
            <h2>Example Project</h2>

            <div className={style.project_card}>
              <p>
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and more.A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and more.
              </p>
            </div>

            <div className={style.icons}>
              <a href="#"><GithubOutlined /></a>
              <a href="#"><LinkOutlined /></a>
            </div>
          </div>

          <img className={style.image} src="/thar logo.jpg" alt="" />
        </div> */}

      </section>

      <section className={style.contact} id='contact'>
        <h1 className={style.headings}>
          Contact
        </h1>
        <section className={style.contact_container}>
          <div className={style.address_div}>
            <h1 className={style.headings}>
              Drop me a message
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde nulla error accusantium eveniet. Impedit, a dolorum optio inventore doloribus ea nesciunt eaque explicabo ex, voluptate laboriosam repudiandae eum ab.</p>
            <div className={style.social_icons}>
              <PhoneOutlined /> {' '} +91 9618795584
            </div>
            <div className={style.social_icons}>
              <MailOutlined /> {' '} <a href="mailto:ppvarma07@gmail.com" target="_blank" rel="noopener noreferrer">ppvarma07@gmail.com</a>
            </div>
            <div className={style.social_icons}>
              <EnvironmentOutlined /> {' '} Raghavendhra colony C-Block, Kondapur, Hyderabad
              {/* <EnvironmentOutlined /> {' '} L B Cherla, Narasapuram, West Godavari, Andhra Pradesh */}
            </div>
          </div>
          <div className={style.contact_form}>

            <form action="" onSubmit={submitform}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' placeholder='John Doe' value={name} onChange={(e)=>{setName(e.target.value)}}  required/>
              <label htmlFor="name">Email</label>
              <input type="email" name='mail' id='mail' placeholder='Johndoe@mail.com' value={mail} onChange={(e)=>{setMail(e.target.value)}} required/>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={5} placeholder='How can i help you?' value={msg} onChange={(e)=>{setMsg(e.target.value)}}></textarea>
              <button type='submit' className={style.contact_btn}>Send message</button>
            </form>
          </div>
        </section>

      </section>

    </section>
  )
}

export default Homepage