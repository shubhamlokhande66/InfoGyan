import React from 'react'
import Input from '@material-ui/core/Input';
import { TextField } from '@material-ui/core';
import "./Signin.css"

export default function Signin() {
    return (
        <div className="inputform">
            <div className="emailinput">
            <TextField
                className="input"
                label="Email"
                variant="outlined"
                name="email"
              
             
              />
              </div>
              <div className="Passwordinput">
            <TextField
                className="input"
                label="Password"
                variant="outlined"
                name="email"
              
             
              />
              </div>
           
            
        </div>
    )
}


