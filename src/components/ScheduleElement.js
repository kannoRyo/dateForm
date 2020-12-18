import React from 'react'
import {DELETE_SCHEDULE} from '../action/index'

const scheduleElement = ({schedule,board,dispatch})=>{
    const month = schedule.date.substring(5,7)
    const date = schedule.date.substring(8)
    const time = schedule.time
    const title = schedule.title
    const description = schedule.description
    const id = schedule.id

    const deleteSchedule = (e) =>{
        e.preventDefault()
        dispatch({
            type: DELETE_SCHEDULE,
            id: id
        })
    }

    return(
        <div className={board}>
            <p Align="left" style={{margin:'0'}}> 
                date:{`${month}/${date}`} <br/>
                time:{time} <br/>
                title:{title} <br/>
                description:{description}
            </p>
            <input type="checkbox" onChange={(e)=>deleteSchedule(e)}/>
        </div>
    )
}

export default scheduleElement