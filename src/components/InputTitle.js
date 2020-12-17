import TextField from '@material-ui/core/TextField';
import React from 'react'

const InputTitle = ({inputTitle,title,handleTitle})=>{
    return(
        <TextField value={title} onChange={handleTitle} id="standard-basic" label="Title" className={inputTitle}/>
    )
}

export default InputTitle

