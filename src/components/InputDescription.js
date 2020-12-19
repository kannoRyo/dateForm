import React from 'react'
import TextField from '@material-ui/core/TextField';

const InputDescription = ({inputDescription,description,handleDescription})=>{
    return(
        <TextField value={description} onChange={handleDescription} label="Description" className={inputDescription}/>
    )
}

export default InputDescription