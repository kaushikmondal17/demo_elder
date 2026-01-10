import React from 'react';
// import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src="/images/banner3.jpg" alt="Elder New Life Banner" />
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box_part_text">
                <h6>About</h6>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, quasi.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste veritatis sapiente rem harum qui fugiat iure, delectus quis totam quia provident similique assumenda? Aliquam nulla eligendi laboriosam totam qui. Quaerat temporibus, fugit facilis suscipit culpa dicta eos obcaecati? Cumque ipsum placeat excepturi omnis quidem nobis ipsa esse dolorum, magnam nostrum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit, rerum vitae architecto a est dignissimos dolores earum maiores asperiores.</p>
                <button className="btn btn-primary px-5 py-2 text-white background-black border-[#000] border rounded-md ">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
