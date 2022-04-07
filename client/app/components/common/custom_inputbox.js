import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default class Custom_InputBox extends Component {
 render()
 {
  return (
    <div>
    <Autocomplete
      onInputChange={this.props.onChange}
      options={this.props.options}
      sx={{flex:1 }}
      renderInput={(params) => <TextField {...params} label="SHA" />}
    />
  </div>
  );
 }
}