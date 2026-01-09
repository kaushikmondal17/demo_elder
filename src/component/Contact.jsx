import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* banner */}
  <div className="inner_banner animate-on-scroll">
  <img src="images/about_banner.webp" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="heading_part">
          <h2 className="animate-on-scroll">Contact Us</h2>
          <p><a href="index.html">Home</a> / Contact Us</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- contact_box --> */}

<div className="contact_part animate-on-scroll">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="contact_box animate-on-scroll wow fadeInRight">
          <i className="fa-solid fa-envelope-circle-check" />
          <h4 className="animate-on-scroll">Email Address</h4>
          <p>info@webmail.com</p>
          <p>info@webmail.com</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact_box animate-on-scroll wow fadeInRight">
          <i className="fa-solid fa-phone-volume" />
          <h4 className="animate-on-scroll">Phone Number</h4>
          <p>+0123-456789</p>
          <p>+0123-456789</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact_box animate-on-scroll wow fadeInRight">
          <i className="fa-solid fa-location-dot" />
          <h4 className="animate-on-scroll">Office Address</h4>
          <p>18/A, New Born Town Hall</p>
          <p>New York, US</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* <!-- contact_form --> */}

<div className="contact_form animate-on-scroll">
  <div className="container">
    <div className="row">
      <div className="main_container_box">
        <h4 className="animate-on-scroll">Get a Queue</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="text_form">
              <input type="text" placeholder="Enter Your Name" />
              <i className="fa-solid fa-user" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text_form">
              <input type="mail" placeholder="Enter Your Email Address" />
              <i className="fa-solid fa-envelope" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text_form">
              <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text_form">
              <input type="text" placeholder="Enter Your Phone Number" />
              <i className="fa-solid fa-phone-volume" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="text_form">
              <textarea placeholder="Enter Your Msg" className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              <i className="fa-solid fa-pen" />
            </div>
          </div>
          <button>get A Free Service</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Contact
