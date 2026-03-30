import React from 'react'
import FOOTER from './FOOTER'
const Sponsors = () => {
  return (
    <div>
      <div className='sp-main'>

        <div className='sp-total' >
          <p id='sp-head'>OUR SPONSORS</p>

          <div className='sponsers2'>
            <marquee className="ph-mar" direction="up" scrollamount="15">
              <img id='spons2' src="/images/marisun-blue.jpg" alt="Marisun Sponsor Logo"></img>
              <img id='spons2' src="/images/tm1.jpg" alt="TM1 Sponsor Logo"></img>
              <img id='spons2' src="/images/tm2.jpg" alt="TM2 Sponsor Logo"></img>
              <img id='spons2' src="/images/tm3.jpg" alt="TM3 Sponsor Logo"></img>

              <img id='spons2' src="/images/foc.jpg" alt="FOC Sponsor Logo"></img>
              <img id='spons2' src="/images/gau.jpg" alt="GAU Sponsor Logo"></img>
              <img id='spons2' src="/images/sr.jpg" alt="SR Sponsor Logo"></img>
              <img id='spons2' src="/images/ysr.jpg" alt="YSR Sponsor Logo"></img>
            </marquee>
          </div>
        </div>

      </div>
      <FOOTER></FOOTER>
    </div>
  )
}

export default Sponsors
