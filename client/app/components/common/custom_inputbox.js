import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default class Custom_InputBox extends Component {
 render()
 {
  return (
    <Paper
      sx={{display: 'flex', alignItems: 'center', width:"100%" }}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={this.props.placeholder}
        onChange={this.props.getValue}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
 }
}