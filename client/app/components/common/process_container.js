import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




export default class Process_Container extends Component {
    
    showInfo(s)
    {
       if(s === 1)
       {
            return (
                
                <label>{this.props.name}</label>
            
            )
       }
       else
       {
            return (
                
                <label>No Process Started</label>

            )
       }

    
    }   

    render()
    {
        return (
        <Paper
            sx={{display: 'flex', alignItems: 'center', width:"100%",minHeight:"10px", marginTop:"10px"}}
        >
            {this.showInfo(this.props.status)}
        
        </Paper>
        );
    }
  }