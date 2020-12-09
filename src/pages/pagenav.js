import React from 'react';
import {Link} from 'react-router-dom';
function Pagenav(props){
  return (
    <nav className="container homenav">
      <ul className="div-header ullink">

        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/buildings">Department</Link></li>
        <li><Link className="link" to="/books">Course Materials</Link></li>
        <li><Link className="link" to="/grade">Grading System</Link></li>
        <li><Link className="link" to="/fest">Electrophoria</Link></li>
        <li><Link className="link" to="/canteen">Canteens</Link></li>
        <li><Link className="link" to="/busroutes">Local Transport</Link></li>
        <li><Link className="link"  to="/tourist">Places Nearby</Link></li>
        <li><a className="link" href="https://www.google.com/search?rlz=1C1CHBD_enIN869IN869&biw=1848&bih=979&tbm=lcl&ei=Q3_QX6PIGdqO4-EPp8ewsAk&q=department+of+electronics+and+telecommunication+engineering+jadavpur+university&oq=Department+Of+Electronics+%26+Telecommunication+Engineering+Ja&gs_l=psy-ab.3.0.0i457i22i30k1j38l2.4788.5912.0.6942.3.3.0.0.0.0.299.836.2-3.3.0....0...1c.1.64.psy-ab..0.3.834...0i22i30k1.0.TtXCRxVjTWA#rlfi=hd:;si:11655604710813491818;mv:[[22.4967696,88.3807679],[22.4941425,88.3711045]]" target="blank">Map</a></li>

      </ul>
    </nav>
  );
}

export default Pagenav;
