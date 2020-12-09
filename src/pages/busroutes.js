import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import { Link } from 'react-router-dom'
import { busroutes } from '../shared/busroutes.js'

function BusRoutes() {
  return (
    <div>  <TouristIntro intro="Local Transport for roam around" />
      <Pagenav />
      <div className="container fade">
        <div className="alert alert-primary d-block d-sm-none" role="alert">
          click on the pictures to see details
</div>
        <h3 className="heading-text2">Bus routes to important places</h3>
        <hr />
        <div>
          <p>It is quite difficult to travel in a new city. Not all are 100% aquinted with their home city either. So, find below the easiest
          and cheapest travel routes to popular places and transit hubs in the city. You can always take a cab or other alternatives,
        but from our experience, these, listed below, are the most efficient ones.</p>
          <ul className="ullink">
            <li>Nearest bus station : 8B Bus stand (Opposite JU Gate no. 02)</li>
            <li>Nearest metro station : Kalighat Metro</li>
            <li>Nearest major railway station : Sealdah and Howrah</li>
            <li>Nearest airport : Netaji Subhas Chandra Bose terminus, Dum Dum</li>
          </ul>
        </div>

        <hr />
        {
          busroutes.map(route => {
            if (route.id % 2 !== 0)
              return (
                <Link to={"/busroutes/" + route.id} key={route.id} style={{ textDecoration: 'none' }}>
                  <MediaPresent
                    id={route.id}
                    src={route.src}
                    heading={route.heading} body={route.body}
                    alt={route.alt}
                  />
                  <hr />
                </Link>
              );
            else
              return (
                <Link to={"/busroutes/" + route.id} key={route.id} style={{ textDecoration: 'none' }}>
                  <ReverseMedia
                    id={route.id}
                    src={route.src}
                    heading={route.heading}
                    body={route.body}
                    alt={route.alt}
                  />
                  <hr />
                </Link>
              );
          })
        }
      </div>
    </div>
  );
}

export default BusRoutes;
