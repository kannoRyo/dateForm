import React,{useState,useReducer} from 'react'
import { makeStyles } from '@material-ui/core'

import reducer from '../reducer/schedules'

import Nav from './Nav'
import ScheduleBoard from './ScheduleBoard'
import InputSchedule from "./InputSchedule"

const useStyles = makeStyles({
  root:{
    display:"grid",
    height:'100vh',
    width:'70%',
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
  }
})

function App() {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className={classes.root}>
      <Nav nav={classes.nav}/>
      <ScheduleBoard scheduleBoard={classes.scheduleBoard}/>
      <InputSchedule inputSchedule={classes.InputSchedule}/>
    </div>
  );
}

export default App;
