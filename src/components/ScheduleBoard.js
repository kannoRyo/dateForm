import React from 'react'
import ScheduleElement from './ScheduleElement'

const ScheduleBoard = ({scheduleBoard,state})=>{
    return(
        <div className={scheduleBoard} Align="center">
            <h2>Schedule</h2>
            {
                state.map((schedule,i)=>{
                    return(
                        <ScheduleElement  schedule={schedule} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default ScheduleBoard