import TextField from '@material-ui/core/TextField';
import React from 'react'

const TimePicker = ({textFieldTime,time,handleTime})=>{
    return(
        <TextField
        id="time"
        label="Time"
        type="time"
        value={time}
        className={textFieldTime}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        onChange={handleTime}
      />
    )
}

export default TimePicker