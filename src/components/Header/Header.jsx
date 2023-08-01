import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles=(menuOpened)=>{
    if (document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wraper'>
    <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler 
          onOutsideClick={()=>{
          setMenuOpened(false)
         }}>
        <div className=" flexCenter h-manu"
          style={getMenuStyles(menuOpened)}
        >
               <a href="">Residencies</a>
               <a href="">Our Value</a>
               <a href="">Contect Us</a>
               <a href="">Get Started</a>
               <button className='button'>
               <a href="">Contect</a>
              </button>
             </div>
            </OutsideClickHandler>
              <div className="manu-icon" onClick={()=>setMenuOpened((prev)=> !prev)}>
                <BiMenuAltRight size={30} />
             </div>
        </div>
        
    </section>
  )
}

export default Header
