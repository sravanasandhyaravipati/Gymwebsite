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
              src="data:image/png;base64,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"
              
            />
            <br/>
            <span className="text-success"><i>FIT</i></span><i>CLUB</i>

          </div>

          <ul className="nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#why-us">Features</a></li>
            <li className="nav-item"><a href="#explore">Explore</a></li>
            <li className="nav-item"><a href="#discount">Register</a></li>
          </ul>

          
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
              src="https://jbgendura101.com/frontend/assets/images/home_cutout.png"
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
              src="https://counselingonlinesite.com/wp-content/uploads/2020/04/man-workout-gym-working.jpg"
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
              src="https://www.shutterstock.com/image-photo/portrait-female-personal-trainer-holding-260nw-2249557387.jpg"
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
              src="https://i.pinimg.com/236x/e8/b2/bd/e8b2bdf9d30fb6f569c462dadd902d95.jpg"
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
              src="https://imagetolink.com/ib/6BZ1NXgsmz.png"
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
                src="https://media.gettyimages.com/id/693275112/photo/he-does-not-shy-away-from-challenges.jpg?s=612x612&w=0&k=20&c=uqm6NTTemvrIdfKgQRBQcZyKjisnd2qaeA-N-ze5kXM="
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
              src="https://jbgendura101.com/frontend/assets/images/about-img-one.png"
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
              src="https://jbgendura101.com/frontend/assets/images/banner-img-2.png"
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
