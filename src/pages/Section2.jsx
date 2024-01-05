import React from 'react'
import Map from '../Components/map/Map'

const Section2 = () => {
  return (
    <div className="section2" id='section2'>
      <h1>How it works</h1>
      <div className="info">
        <div className="info-containers">
          <h2>01</h2>
          <p>Pray some decades of Rosary on the beads and scan its QR code to log its location</p>
        </div>
        <div className="info-containers">
          <h2>02</h2>
          <p>Enter your name and the number of decades you have prayed</p>
        </div>
        <div className="info-containers">
          <h2>03</h2>
          <p>Have a look at the map if you want to know of the decades of the Rosaries recited across Kerala</p>
        </div>
        <div className="info-containers">
          <h2>04</h2>
          <p>Handover the rosary to another person and continue the same</p>
        </div>

      </div>
      {/* <Map /> */}
    </div>
  )
}

export default Section2
