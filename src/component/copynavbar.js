import React from 'react'
import {Link,NavLink, withRouter } from 'react-router-dom'
import './nav.css'
import gts from '../images/gts.png'
const Navbar  = (props) => {
    //setTimeout(() =>{
       // props.history.push('about')
   //},2000)
    return(


        
    
      <div className="navwrapper">
          <div className="navrow">
              <div>
              <img  className="navlogo" src={gts} alt="ed"/> 
              </div>
         
         
          <ul className="navlinks">
         
         <li className="pagelink"  ><Link to="/home">Home</Link></li>
           <li ><NavLink to="/AddPrice">Add Price</NavLink></li>
           <li><NavLink to="/confirm">Confirm Price</NavLink></li>
           <li ><NavLink to="/configration">Configuration</NavLink></li>
          
        
       </ul>
         
         
          </div>
         
   </div>




    )
  
}

export default  withRouter(Navbar)