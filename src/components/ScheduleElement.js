import React from 'react'

const scheduleElement = ({schedule})=>{
    const month = schedule.date.substring(5,6)
    const date = schedule.date.substring(8)
    const time = schedule.time
    const title = schedule.title
    const description = schedule.description
    return(
        <div>
            <p Align="left" style={{margin: '0 auto'}}> 
                date:{`${month}/${date}`} <br/>
                time:{time} <br/>
                title:{title} <br/>
                description:{description}
            </p>
        </div>
    )
}

export default scheduleElement