import React ,{useEffect}from 'react'
import ScheduleElement from './ScheduleElement'
import {SORT_SCHEDULE} from '../action'

const ScheduleBoard = ({scheduleBoard,state,dispatch,board})=>{
    useEffect(()=>{
        dispatch({
            type: SORT_SCHEDULE
        })
    },)

    return(
        <div className={scheduleBoard} Align="center">
            <h2>Schedule</h2>
            {
                state.map((schedule,i)=>{
                    return(
                        <ScheduleElement  schedule={schedule} board={board} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default ScheduleBoard