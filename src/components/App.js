import React,{useReducer, useEffect} from 'react'
import { makeStyles } from '@material-ui/core'

import reducer from '../reducer/schedules'
import{ADD_SCHEDULE} from '../action/index'

import Nav from './Nav'
import ScheduleBoard from './ScheduleBoard'
import InputSchedule from "./InputSchedule"

const dayjs = require('dayjs')

const useStyles = makeStyles({
  root:{
    display:"grid",
    height:'100vh',
    width:'75%',
    margin:'0 auto',
    gridTemplateRows:'70px 1fr',
    gridTemplateColumns:'60% 40%'
  },
  nav:{
    gridRow: "1/2",
    gridColumn: "1/3",
    display:'flex',
    justifyContent:'space-between',
    lineHeight:'70px'
  },
  scheduleBoard:{
    gridRow: "2/3",
    gridColumn: "1/2"
  },
  inputSchedule:{
    gridRow: "2/3",
    gridColumn: "2/3"
  },
  board:{
    width: '200px',
    height: '100px',
    margin:'20px',
    padding:'12px',
    display:'flex',
    justifyContent:'space-between',
    border: '4px solid #8bb9dd'
  }
})

function App() {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, [])
  // console.log(state)

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
      <ScheduleBoard scheduleBoard={classes.scheduleBoard}  dispatch={dispatch} state={state} board={classes.board}/>
      <InputSchedule inputSchedule={classes.InputSchedule}  dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
