import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    title:{
        fontFamily: 'Noto Sans JP',
        fontSize:'20px'
    },
    date:{
        marginRight:'20%'
    }
})

const Nav = ({nav})=>{
    const classes = useStyle()
    return(
        <div>Nav</div>
    )
}

export default Nav