import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomInputBox = (props) => {
  return (
    <div>
      <Autocomplete
        onInputChange={props.onInputChange}
        options={props.options}
        value={props.value}
        isOptionEqualToValue={(option, value) => option.value == value.value}
        inputValue={props.value}
        sx={{flex:1 }}
        renderInput={(params) => <TextField {...params} label="SHA" />}
      />
  </div>
  )
}

export default CustomInputBox;

// export default class Custom_InputBox extends Component {
//  render()
//  {
//   return (
//     <div>
//     <Autocomplete
//       onInputChange={this.props.onInputChange}
//       options={this.props.options}
//       value={this.props.value}
//       isOptionEqualToValue={(option, value) => option.value == value.value}
//       inputValue={this.props.value}
//       sx={{flex:1 }}
//       renderInput={(params) => <TextField {...params} label="SHA" />}
//     />
//   </div>
//   );
//  }
// }