import React from 'react'
import style from './page.module.css'
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiMysql } from "react-icons/si";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, GithubOutlined, LinkOutlined, CodeOutlined } from "@ant-design/icons"

const Homepage = () => {
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
            <button className={style.contact_btn}>Contact</button>
          </section>
          <section className={style.right_container}>
            <img src="/thar logo.jpg" alt="" />
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
              <FaPython />
              <FaReact />
              <FaHtml5 />
              <FaCss3Alt />
              <FaDatabase />
            </div>
            <div className={style.skills_icons_div}>
              <SiNextdotjs />
              <SiJavascript />
              <SiMysql />
              <CodeOutlined />
            </div>
          </div>

          <div className={style.container}>

            <div className={style.icon}><SiNextdotjs /></div>
            <div className={style.icon}><SiJavascript /></div>
            <div className={style.icon}><SiMysql /></div>
            <div className={style.icon}><CodeOutlined /></div>
            <div className={style.icon}><FaPython /></div>
            <div className={style.icon}><FaReact /></div>
            <div className={style.icon}><FaHtml5 /></div>
            <div className={style.icon}><FaCss3Alt /></div>
            <div className={style.icon}><FaDatabase /></div>

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
        </div>
        <div className={style.project_div}>
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
        </div>
        <div className={style.project_div}>
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
        </div>
        <div className={style.project_div}>
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
        </div>
        <div className={style.project_div}>
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
        </div>

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
              <EnvironmentOutlined /> {' '} L B Cherla, Narasapuram, West Godavari, Andhra Pradesh
            </div>
          </div>
          <div className={style.contact_form}>

            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' placeholder='John Doe' />
              <label htmlFor="name">Email</label>
              <input type="email" name='mail' id='mail' placeholder='Johndoe@mail.com' />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={5} placeholder='How can i help you?'></textarea>
              <button type='submit' className={style.contact_btn}>Send message</button>
            </form>
          </div>
        </section>

      </section>

    </section>
  )
}

export default Homepage