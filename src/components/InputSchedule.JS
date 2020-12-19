import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import {
    ADD_SCHEDULE, DELETE_ALL_SCHEDULS
} from '../action/index'

import DatePicker from './DatePicker'
import Timepicker from './TimePicker'
import InputTitle from './InputTitle.js'
import InputDescription from './InputDescription.js'

const useStyles = makeStyles((theme) => ({
    container: {        
        display:'flex',
        flexDirection:'column'
    },
    inputscheduleCover:{
        height:'auto',
        padding:'20px',
        borderRadius:'32px',
        border: '2px solid#454545',

    },
    textFieldDate: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    textFieldTime: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    inputTitle:{
        width:200,
    },
    inputDescription:{
        width:270,
    },
  }));

const Inputschedule = ({inputSchedule,dispatch,state})=>{
    const classes = useStyles()
    const [date,setDate] = useState('')
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitSchedule = (e)=>{
        e.preventDefault()
        dispatch({
            type: ADD_SCHEDULE,
            date: date,
            time: time,
            title: title,
            description: description
        })

        setDate('')
        setTime('')
        setTitle('')
        setDescription('')
    }

    const handleDate = (e)=>{
        setDate(e.target.value)
        // console.log(e.target.value)
    }
    const handleTime = (e)=>{
        setTime(e.target.value)
        // console.log(e.target.value)
    }
    const handleTitle = (e)=>{
        setTitle(e.target.value)
        // console.log(e.target.value)
    }
    const handleDescription = (e)=>{
        setDescription(e.target.value)
        // console.log(e.target.value)
    }

    const deleteAllShedules = (e)=>{
        e.preventDefault()
        if(!window.confirm('すべてのスケジュールを削除しますか？')){
            return
        }
        
        dispatch({
            type:DELETE_ALL_SCHEDULS
        })
    }

    return(
        <div className={inputSchedule}>
        <div className={classes.inputscheduleCover}>
        <h3>Schedule作成</h3>
        <form className={classes.container}  onSubmit={(e)=> submitSchedule(e)} noValidate >     
            <DatePicker textFieldDate={classes.textFieldDate}　date={date} handleDate={(e)=>handleDate(e)}/>
            <Timepicker textFieldTime={classes.textFieldTime} time={time} handleTime={(e)=>handleTime(e)}/>
            <InputTitle inputTitle={classes.inputTitle} title={title} handleTitle={(e)=>handleTitle(e)}/>
            <InputDescription inputDescription={classes.inputDescription} description={description} handleDescription={(e)=>handleDescription(e)}/>

            <br/><Button onClick={(e)=> submitSchedule(e)} variant="contained"  color="primary" disabled={!(date && time && title)}>送信</Button>
        </form>       
        <Button onClick={(e)=>deleteAllShedules(e)} style={{width:'100%',height:'40px' ,margin:'20px 0'}} color="secondary" variant="contained" disabled={!(state.length)}>全部のスケジュールを削除する</Button>
        </div>
        </div>
    )
}

export default Inputschedule