import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a todo-list for managing your tasks.',
    github: 'https://github.com/gaurav-0494/Task-Manager.git',
    demo: 'https://task-manager-site.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a clone of Disney+ Hotstar home page.',
    github: 'https://github.com/gaurav-0494/Disney-Hotstar-clone.git',
    demo: 'https://disneyphotstar.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a Diwali Greetigs site.',
    github: 'https://github.com/gaurav-0494/Diwali-Greetings.git',
    demo: 'https://happy-diwali-greetings.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a live NewYear countdown site.',
    github: 'https://github.com/gaurav-0494/newyear-countdown.git',
    demo: 'https://new-year-current.netlify.app/'
  },
  {
    id: 5,
    image: IMG4,
    title: 'This is a live NewYear countdown site',
    github: 'https://github.com/gaurav-0494/newyear-countdown.git',
    demo: 'https://new-year-current.netlify.app/'
  },
  {
    id: 6,
    image: IMG4,
    title: 'This is a live NewYear countdown site',
    github: 'https://github.com/gaurav-0494/newyear-countdown.git',
    demo: 'https://new-year-current.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
