import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
      
function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas impedit mollitia deserunt eligendi harum quam voluptate praesentium distinctio laborum voluptatibus cupiditate odit atque consectetur recusandae exercitationem at explicabo commodi.'
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptatum soluta iusto corrupti. Voluptatum, magnam veniam nam repellat sunt voluptates! Magnam tempora rem odit reiciendis asperiores. Tempore omnis autem libero!'
    },
    {
      avatar: AVTR3,
      name: 'Kwame Despite',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium molestiae ullam error, obcaecati officiis commodi qui illum ducimus consequatur harum hic soluta rem, nam culpa impedit beatae. Fuga, possimus.'
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati dolor voluptatibus, dolores qui perferendis sed illo? Assumenda, sequi nam harum blanditiis architecto odit neque velit totam pariatur, corrupti atque.'
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients.</h5>
      <h2>Testimonials</h2>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="container testimonials__container">
                <article className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </article>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default HomeCarousel
