import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import TextField from '@material-ui/core/TextField';

const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: red;
padding-top:50px;

`;
const formWrapper =styled.section`
display:flex;
background-color:red;


`;




  
export default class addPriceForm extends Component {

    render() {
        return (


<div>


    <Title>
    <h1>title</h1>
    </Title>


    <div className="formwrapper">
    <formWrapper>
<div className="row">
<label className="rowitemlabel">Product 80</label>
       <input
            
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            readonly
            /> 
            <TextField   id="outlined-basic" label="Put Gasoline 80 Price " variant="outlined"  />
</div>
<div className="row">
<label className="rowitemlabel">Product 80</label>
       <input
     
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            readonly
            /> 
            <TextField   id="outlined-basic" label="Put Gasoline 80 Price " variant="outlined"  />
</div>
<div className="row">
<label className="rowitemlabel">Product 80</label>
       <input
            
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            readonly
            /> 
            <TextField   id="outlined-basic" label="Put Gasoline 80 Price " variant="outlined"  />
</div>
<div className="row">
<label className="rowitemlabel">Product 80</label>
       <input
      
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            readonly
            /> 
            <TextField   id="outlined-basic" label="Put Gasoline 80 Price " variant="outlined"  />
</div>
</formWrapper>  
    </div>
    




    </div>




            
        )
    }
}
