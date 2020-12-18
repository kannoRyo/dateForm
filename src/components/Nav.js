import React from 'react'
import { makeStyles } from '@material-ui/core'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
const dayjs = require('dayjs')

const useStyle = makeStyles({
    icon:{
        color:'black',
        lineHeight: '6',
    },
    title:{
        fontFamily: 'Noto Sans JP',
        fontSize:'25px',
        marginRight:'20px'
    },
    date:{
        // marginRight:'20%',
        fontFamily: 'Sawarabi Gothic',
        fontSize:'25px'
    }
})

const Nav = ({nav})=>{
    const classes = useStyle()
    const month = dayjs().month() +1
    const date = dayjs().date()
    const day = dayjs().day()
    const dayStr = ['日','月','火','水','木','金','土']

    return(
        <div className={nav}>
            <div className={classes.icon}>
            <AssignmentOutlinedIcon fontSize="large"/>
            </div>
            <div className={classes.title}>
                スケジュール管理アプリ
            </div>
            <div className={classes.date}>Today: {`${month}月${date}日 （${dayStr[day]}）`}</div>
        </div>
    )
}

export default Nav