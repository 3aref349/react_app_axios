import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './form.css';

const Title = styled.h4`



font-size:78px;
color:red;
padding-top:50px;

`;







  
export default class ConfirmPrice extends Component {

    render() {
        return (
            <div className="center">
               <Fade  delay={500}>
     <Title>
     <h4>If you agree Just Confirm ..</h4>
  
     </Title>

       </Fade>
            
                <form className="form-wrapper">

                <div className="row">
     <h5 className="rowitem">Application Date is : <span className="rowspan">Date</span></h5>
                   
</div>
<div className="row">
     <h5 className="rowitem">Application Time is : <span className="rowspan">Time</span></h5>
                   
</div>

<div className="row">
     <h5 className="rowitem">Gasoline 80 is : <span className="rowspan">5.75 L.E</span></h5>
                   
</div>

        
<div className="row">
     <h5 className="rowitem">Gasoline 80 is : <span className="rowspan">5.75 L.E</span></h5>
                   
</div>
        
   <div className="row">
     
                   <h5 className="rowitem">Gasoline 92 is : <span className="rowspan"> 6.75 L.E</span></h5>
   </div>
    

    <div className="row">
      
                   <h5 className="rowitem">Gasoline 95 is : <span className="rowspan">7.75 L.E</span></h5>
    </div>
   
   <div className="row">
    
                   <h5 className="rowitem">Gasoline 80 is : <span className="rowspan"> 4.75 L.E</span></h5>
   </div>

  
            <button  className=" confirmbtn" type="submit">Confirm</button>

                </form>
         
            </div>
        )
    }
}
