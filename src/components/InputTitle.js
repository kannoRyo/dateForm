import TextField from '@material-ui/core/TextField';
import React from 'react'

const InputTitle = ({inputTitle,title,handleTitle})=>{
    return(
        <TextField value={title} onChange={handleTitle} label="Title" className={inputTitle} style={{marginLeft:'0',marginTop:'10px'}}/>
    )
}

export default InputTitle

