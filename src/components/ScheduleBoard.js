import React from 'react'
import ScheduleElement from './ScheduleElement'

const ScheduleBoard = ({scheduleBoard,state,dispatch,board,content,paper,isOpen, handleToggle,modalStyle,modal})=>{
    return(
        <>
        <div className={scheduleBoard} >
            <h2>Schedule</h2>
            {
                state.length
                ?
                    state.map((schedule,i)=>{
                        return(
                            <ScheduleElement  
                                schedule={schedule} 
                                board={board} 
                                key={i} 
                                dispatch={dispatch} 
                                paper={paper} 
                                isOpen={isOpen} 
                                handleToggle={handleToggle} 
                                modalStyle={modalStyle}
                                modal={modal}
                                content={content}
                            />
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