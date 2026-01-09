import React from 'react'


const About = () => {
  return (
    <div>
<div className="about animate-on-scroll">
  <div className="container">
    <div className="row">
      {/* Left Content */}
      <div className="col-lg-6 col-md-12">
        <div className="about_left_part">
          <h5>About Us</h5>
          <h2>
            Committed to Your <br />
            <b>Health and Wellness</b>
          </h2>

          <p>
            <b>W</b>e are dedicated to delivering trusted, patient-centered healthcare.
            Our team of experienced physicians, surgeons, and specialists combines
            medical excellence with compassionate care — ensuring every patient
            receives the highest quality treatment in a comfortable and safe
            environment.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-lg-6 col-md-12">
        <div className="right_images">
          <img src="images/about.png" alt="About" />

          {/* Button */}
          <a
            href="https://www.alventapharma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <p className="button__text">
              {[
                "A","L","V","E","N","T","A"," ",
                "P","H","A","R","M","A",".",
                "C","O","M"
              ].map((char, index) => (
                <span key={index} style={{ "--index": index }}>
                  {char}
                </span>
              ))}
            </p>

            <span className="button__circle">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon"
                width="14"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon button__icon--copy"
                width="14"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>

          <img src="images/about.png" alt="About duplicate" />
        </div>
      </div>

      {/* Counter Section */}
      <section
        id="counter-stats"
        className="wow fadeInRight"
        data-wow-duration="1.4s"
      >
        <div className="container">
          <div className="grid_box">
            {[
              { count: 25, label: "Years Experience" },
              { count: 25, label: "States Served" },
              { count: 1000, label: "Products" },
              { count: 500, label: "Employees" },
              { count: 25000, label: "On Shop Store" },
              { count: 25, label: "Years Experience" },
            ].map((item, index) => (
              <div className="stats box_run" key={index}>
                <div className="counting" data-count={item.count}>
                  0+
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
</div>


    </div>
  )
}

export default About
