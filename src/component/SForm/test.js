import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import TextField from '@material-ui/core/TextField';


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './stepform.css'
const WrapperSection = styled.section`

display:flex;
justify-content:center;

width:100%;
margin-top:10px;
align-items: center; 




`;
const Wrapperdiv = styled.div`

display:flex;
justify-content:center;
flex-direction: column;
background-color:#f2f7f4;




`;
 const Wrapperdivrow=styled.div`
 
 display:flex;
 justify-content:space-around ;
 flex-direction: row;
 padding:10px;

 `;

const Button = styled.button`


justify-content:center;


width:100%;
border:none



`;
const Title = styled.h5`

line-height: 2.5;


font-weight: bold;
font-size:100%;
color:black;
width:100%;


`;
const TwoButtons = styled.button`
display flex;
width:100px;
background-color: rgb(82, 104, 230);;
color:white;
justify-content:center;
border:none;
border-radius:5px;

margin:25px;



`;
const Inputdiv = styled.div`
padding:50px;


`;

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      appdate:  '',
      apptime: '',
      Gasoline80: '', 
      Gasoline92: '', 
      Gasoline95: '', 
      Diesel: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { appdate, apptime, Gasoline80,Gasoline92,Gasoline95,Diesel } = this.state
    alert(`Your Data  Saved: \n 
       
           `
           )
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1? 2: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <Wrapperdivrow>

<button className="stepformbtns"  onClick={this._prev}>previous  Page</button>
    
   
      </Wrapperdivrow>
      
   
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <2){
    return (

      <Wrapperdivrow>
        <button  className="stepformbtns" onClick={this._next}>Next Page</button>
         
          </Wrapperdivrow>
            
            
         
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>

      

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
     
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <WrapperSection>
    <div className="form-group">
 

<Fade  delay={500}>
     <Title>
     <h2> Pick App Date & Time  </h2>
  
     </Title>

       </Fade>
 
        <Wrapperdiv>
 <Inputdiv>
 
<input
    
      id="appdate"
      name="appDate"
      type="date"
     /> 
</Inputdiv>
<Inputdiv>
<input
      
      id="appTime"
      name="appTime"
      type="time"
      /> </Inputdiv>
     
        </Wrapperdiv>
 
    </div>
    </WrapperSection>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <WrapperSection>
    <div className="">
  

<Fade  delay={500}>
     <Title>
     <h2>Please Enter new Prices</h2>
  
     </Title>

       </Fade>
        <Wrapperdiv>
          <Wrapperdivrow>
            <h6 className="formlabel">Gasoline 80</h6>
          <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Gasoline 80 price"
          InputProps={{
            readOnly: true,
          }}
        />
           
           <div className="textfieldclass">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="put new Price"
          variant="outlined"
        /> 
           </div>
          </Wrapperdivrow>
     
          <Wrapperdivrow>
          <h6 className="formlabel">Gasoline 92</h6>
          <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Gasoline 92 price"
          InputProps={{
            readOnly: true,
          }}
        />
              <div className="textfieldclass">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="put new Price"
          variant="outlined"
        /> 
           </div>
          </Wrapperdivrow> 
          <Wrapperdivrow>
          <h6 className="formlabel">Gasoline95</h6>
          <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Gasoline95 price"
          InputProps={{
            readOnly: true,
          }}
        />
           
           <div className="textfieldclass">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="put new Price"
          variant="outlined"
        /> 
           </div>
          </Wrapperdivrow> 
          <Wrapperdivrow>
          <h6 className="formlabel">Diesel</h6>
          <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Diesel Price"
          InputProps={{
            readOnly: true,
          }}
          
        />
           <div className="textfieldclass">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="put new Price"
          variant="outlined"
        /> 
           </div>
            
           </Wrapperdivrow> 

<button className=" submit  ">Submit</button> 
                
        </Wrapperdiv>
     
     
        
      
        
        
                 
    </div>
    </WrapperSection> 
  );
}


export default MasterForm

