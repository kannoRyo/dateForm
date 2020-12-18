import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
        width:300,
    },
  }));

const Inputschedule = ({inputschedule,dispatch,state})=>{
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

        dispatch({
            type:DELETE_ALL_SCHEDULS
        })
    }

    return(
        <div className={inputschedule}>
        <h3>Schedule作成</h3>
        <form className={classes.container}  onSubmit={(e)=> submitSchedule(e)}noValidate >     
            <DatePicker textFieldDate={classes.textFieldDate}　date={date} handleDate={(e)=>handleDate(e)}/>
            <Timepicker textFieldTime={classes.textFieldTime} time={time} handleTime={(e)=>handleTime(e)}/>
            <InputTitle inputTitle={classes.inputTitle} title={title} handleTitle={(e)=>handleTitle(e)}/>
            <InputDescription inputDescription={classes.inputDescription} description={description} handleDescription={(e)=>handleDescription(e)}/>

            <br/><button>送信</button>
        </form>       
        <button onClick={(e)=>deleteAllShedules(e)} style={{width:'100%',height:'30px' ,margin:'30px 0'}}>全部のスケジュールを削除する</button>
        </div>
    )
}

export default Inputschedule