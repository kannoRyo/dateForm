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
        <div className={nav}>
            <div className={classes.title}>スケジュール管理アプリ</div>
            <div className={classes.date}>Today:日付(曜日)</div>
        </div>
    )
}

export default Nav