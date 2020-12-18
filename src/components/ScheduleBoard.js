import React from 'react'
import ScheduleElement from './ScheduleElement'

const ScheduleBoard = ({scheduleBoard,state,dispatch,board})=>{
    return(
        <>
        <div className={scheduleBoard} Align="center">
            <h2>Schedule</h2>
            {
                state.length
                ?
                    state.map((schedule,i)=>{
                        return(
                            <ScheduleElement  schedule={schedule} board={board} key={i} dispatch={dispatch} />
                        )
                    })
                :
                'Schedule is nothing to do!'
            }
        </div>
        </>
    )
}

export default ScheduleBoard