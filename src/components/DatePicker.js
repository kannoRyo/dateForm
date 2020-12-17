import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePickers = ({textFieldDate,handleDate,date})=> {
  return (
    <>
      <TextField
        id="date"
        label="Date"
        type="date"
        value={date}
        className={textFieldDate}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleDate}
      />
    </>
  );
}

export default DatePickers