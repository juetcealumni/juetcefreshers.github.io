import React from 'react';
import {Link} from 'react-router-dom'

function Footer(){
  return(
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About us</Link></li> */}

              <li><a href="https://www.collegepravesh.com/engineering-colleges/jadavpur-university/" target="blank">Check Departmental Cutoffs here</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 social">
            <a href="https://www.facebook.com/juetce"><i className="fa fa-facebook icon fa-lg"></i></a>
            <a href="https://github.com/juetcefreshers" target="blank"><i className="fa fa-github icon fa-lg"></i></a>
            <a href="mailto:electrophoria2020@gmail.com"><i className="fa fa-envelope icon fa-lg"></i></a>
          </div>
          <div className="col-12 copyright">&copy; Welcome Freshers of JU ETCE created with <span role="img" aria-label="love hearted emoji">💚</span></div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
