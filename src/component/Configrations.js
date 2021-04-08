import React, { Component } from 'react'

import 'date-fns';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Fade from 'react-reveal/Fade';
import FilledInput from '@material-ui/core/FilledInput';
import './SForm/confirmationpagee.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components'

const WrapperSection = styled.section`
background-color:white;
display:flex;
justify-content:center;
width:100%;

padding-bottom: 2em;
padding-top: 2em;
background-color:#f2f7f4;


`;
const Title = styled.h1`

line-height: 2.5;

font-family: "Brush Script MT";
font-weight: bold;
font-size:70%;
color:#ff4800;



`;

const Wrapper = styled.section`

display:flex;
justify-content:center;

flex-direction: column;
width:50%;
text-align:center;

`;
const Rowdiv = styled.div`
padding:10px;
display:flex;
flex-direction: row;

`;



export default class Configrations extends Component {
    render() {
        return (
          
            <div>
           <h1>configration Page</h1>
    

           
            

        </div>
           
    

           
            

     
        )
    }
}
