import React from 'react'
import './Hero.css'
import {HiLocationMarker } from 'react-icons/hi' 
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className='hero-wraper'>
        <div className="paddings innerwidth flexCenter hero-container">
           {/*left side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-cricle" />
                    <motion.h1
                     initial={{y:"2rem",opacity:0}}
                     animate={{y:0, opacity:1}}
                     transition={{duration:2, type:"spring"}} >A Place Where <br/> You Blong <br/> Buy Your Dreams </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                    <span className='secondaryText'>Forget all defficulties in finding a residency for you</span>
                </div>
                <div className=" flexCenter search-bar">
                   <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type="text" />
                      <button className='button'>Search</button>
                </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                        <span> 
                        <CountUp start={8800} end={9000}  />
                        <span>+</span>
                        </span>
                        <span className="secondaryText">premium product</span>
                      </div>
                      
                         <div className="flexColCenter stat">
                         <span> 
                          <CountUp start={2500} end={3500} duration={4} />
                        <span>+</span>
                        </span>
                        <span className="secondaryText">Happy custmers</span>
                      </div>
                     
                     
                        <div className="flexColCenter stat">
                        <span> 
                        <CountUp end={90} />
                        <span>+</span>
                        </span>
                        <span className="secondaryText">Award winnings</span>
                      </div>
                     </div>
                     </div>
                    
           
            {/*right side */}
            <div className=" flextCenter hero-right">
                <motion.div
                    initial={{x:"7rem",opacity:0}}
                     animate={{x:0, opacity:1}}
                     transition={{duration:2, type:"spring"}}
                
                className="image-container">
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
