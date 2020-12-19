import React,{useReducer, useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core'

import reducer from '../reducer/schedules'
import{ADD_SCHEDULE} from '../action/index'

import Nav from './Nav'
import ScheduleBoard from './ScheduleBoard'
import InputSchedule from "./InputSchedule.js"

const dayjs = require('dayjs')

const useStyles = makeStyles((theme)=>({
  root:{
    display:"grid",
    height:'100vh',
    width:'80%',
    margin:'0 auto',
    gridTemplateRows:'70px 1fr',
    gridTemplateColumns:'60% 40%'
  },
  nav:{
    gridRow: "1/2",
    gridColumn: "1/3",
    display:'flex',
    margin:'0 auto',
    lineHeight:'70px'
  },
  scheduleBoard:{
    paddingTop:'30px',
    gridRow: "2/3",
    gridColumn: "1/2",
    textAlign:'center',
  },
  inputSchedule:{
    paddingTop:'30px',
    gridRow: "2/3",
    gridColumn: "2/3",
  },
  board:{
    width: '400px',
    margin:'20px auto',
    borderRadius:'16px',
    padding:'12px',
    display:'flex',
    justifyContent:'space-between',
    border: '2px solid #2e2e2e',
  },
  content:{
    display:'flex',
    fontSize:'20px',
    fontFamily:'Noto Sans JP'
  },
  modal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper:{
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    outline:'none',
    borderRadius:'18px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }

}))

const rand = ()=> {
  return Math.round(Math.random() * 20) - 10;
}  

const  getModalStyle = ()=> {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const  App = ()=> {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, [])
  const [modalStyle] = useState(getModalStyle)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e)=>{
    e.preventDefault()

    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(()=>{
    dispatch({
      type: ADD_SCHEDULE,
      date: dayjs().format('YYYY-MM-DD'),
      time: '12-12',
      title: 'title',
      description: 'description'
    })
  },[])

  return (
    <div className={classes.root}>
      <Nav nav={classes.nav}/>
      <ScheduleBoard
        scheduleBoard={classes.scheduleBoard}  
        dispatch={dispatch} 
        state={state} 
        board={classes.board} 
        paper={classes.paper} 
        content={classes.content}
        isOpen={isOpen}
        handleToggle={(e)=> handleToggle(e)}
        modalStyle={modalStyle}
        modal={classes.modal}
       />
      <InputSchedule inputSchedule={classes.inputSchedule}  dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
