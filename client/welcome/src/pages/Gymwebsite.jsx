import React from 'react';
import './Gymwebcss.css'; // Import CSS file
import { IonIcon } from '@ionic/react';

 
const GymWebsite = () => {
  return (
    <div>
      <div className="menu">
        <div className="container flex">
          {/* Mobile Button */}
          <div className="mobile-btn">
            <IonIcon name="grid"></IonIcon>
          </div>
          <div className="logo">
            <img
              decoding="async"
              src="https://i.pinimg.com/originals/0e/78/3e/0e783e2aee4a11fe95bed070fbb93e30.jpg"
              
            />
          </div>

          <ul className="nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#why-us">Features</a></li>
            <li className="nav-item"><a href="#explore">Explore</a></li>
            <li className="nav-item"><a href="#discount">Register</a></li>
          </ul>

          <a href="#" className="btn">Login</a>
          <a href="/Form" className="btn">Register</a>
        </div>
      </div>

      <header className="header">
        <div className="container flex">
          <div className="text">
            <h1 className="mb">
              Complete Daily <br />
              <span>Workout</span> At Home
            </h1>

            <p className="mb">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              sunt sed tempora neque molestiae corrupti nobis harum ullam eos nam!
            </p>

            <a href="#" className="btn mt">Get Started Now</a>
          </div>

          <div className="visual">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png"
              alt=""
            />
          </div>
        </div>
      </header>

      <div className="section" id="explore">
        <div className="container flex">
          <div className="visual">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg"
              alt=""
            />
          </div>
          <div className="text">
            <h2 className="primary mb">
              Explore Our Fitness <br />
              Studio
            </h2>
            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              esse vitae ratione quos maiores eveniet temporibus illum! Eligendi
              amet officia unde sint totam ut optio. Molestiae, illo quia?
            </p>

            <a href="#" className="btn mt">Get Started Now</a>
          </div>
        </div>
      </div>

      <div className="section" id="trainer">
        <h2 className="primary mb">Our Professional Trainers</h2>
        <div className="container flex">
          <div className="trainer">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
              alt=""
            />
            <h3 className="secondary mb">Alan Smith</h3>
            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" className="btn-2">
              <IonIcon name="arrow-redo-circle-outline"></IonIcon>
            </a>
          </div>

          <div className="trainer">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
              alt=""
            />
            <h3 className="secondary mb">Alan Smith</h3>
            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" className="btn-2">
              <IonIcon name="arrow-redo-circle-outline"></IonIcon>
            </a>
          </div>

          <div className="trainer">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
              alt=""
            />
            <h3 className="secondary mb">Alan Smith</h3>
            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>

            <a href="#" className="btn-2">
              <IonIcon name="arrow-redo-circle-outline"></IonIcon>
            </a>
          </div>
        </div>
      </div>

      <div className="section" id="testimonial">
        <div className="container flex">
          <div className="text">
            <h2 className="primary">
              That's What Our Super <br />
              Client Says
            </h2>

            <br />
            <br />
            <br />

            <div className="client">
              <img
                decoding="async"
                src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg"
                alt=""
              />
              <h2 className="secondary">Exelent Training</h2>
              <p className="tertiary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                quas voluptatem ad, repudiandae voluptates odio deleniti
                reiciendis in veniam quidem expedita maxime error fugit. Pariatur
                quasi sunt aut id. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Neque, officiis.
              </p>
            </div>
          </div>
          <div className="visual">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      {/* Discount */}
      <div className="section" id="discount">
        <div className="container flex">
          <div className="visual">
            <img
              decoding="async"
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
              alt=""
            />
          </div>
          <div className="text">
            <h2 className="primary mb">
              Fitness Classes This Summer, Pay Now And Get 25% Discount
            </h2>

            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
              minus praesentium est et veniam voluptate alias excepturi minima
              placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum,
              explicabo eaque obcaecati.
            </p>

            <a href="#" className="btn bt">Book Now</a>
          </div>
        </div>
      </div>
      {/* End Discount */}

      {/* Footer */}
      <footer className="footer">
        <div className="container flex">
          <p className="tertiary">
            &copy; 2024 Vijay Bayye. All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* End Footer */}

      {/* BTN */}
      {/* End Footer */}

      {/* Ion Icons Js */}
    </div>
  );
};

export default GymWebsite;
