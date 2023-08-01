import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className='f-wraper'>
     <div className="paddings innerWidth flexCenter f-container">
        {/*left side*/}
        <div className="flexColStart f-left">
            <img src="logo2.png" alt="" width={120} />
            <span className='secondaryText'>
                our vision is to make all people <br/>
                the best place to live for them
            </span>
        </div>
        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span>145 new york,Fl 4367, USA</span>
        <div className="flexCenter f-manu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>

        </div>

        </div>
     </div>
   </section>
  )
}

export default Footer
