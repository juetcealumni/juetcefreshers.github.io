import React from 'react'





function About() {


  return (
    <div className="container fade">
      <div className="type-body">
        <div className="typewriter">
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 image-adjust"><img src={''} className="mediaimage image" alt=" malay"></img>
          <div className="middle">
            <div className="text">
              <h6>Member Name</h6>
              <a href="/" target="blank"><i className="fa fa-github about-icon fa-lg"></i></a>
              <a href="/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
              <a href="/" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
