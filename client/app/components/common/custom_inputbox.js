import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomInputBox = (props) => {
  return (
      <div>
      <Autocomplete
        freeSolo
        disableClearable
        onInputChange={props.onChange}
        options={props.options}
        sx={{flex:1 }}
        renderInput={(params) => <TextField {...params} label="SHA" />}
      />
      </div>
  );
}


export default CustomInputBox