import React from 'react'
import YouTube from 'react-youtube'

const Section1 = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="section1">
      <div className="heading"> 
        <h1 className="section1-title">Sacred Journey:</h1>
        <h3 className="section1-subtitle">Pray with Mama Mary</h3>
        <p className="section1-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, molestiae! Ratione itaque culpa, eaque laboriosam praesentium eos, expedita animi, tempora quaerat debitis sed odit! Blanditiis vero dolores debitis provident soluta.</p>
      </div>
      {/* <iframe className="video"
         src="https://www.youtube.com/watch?v=m77D52rIwVE">
      </iframe> */}
      <div className="video_container">
        <YouTube videoId='m77D52rIwVE'opts={opts} />
      </div>
      
    </div>
  )
}
export default Section1
