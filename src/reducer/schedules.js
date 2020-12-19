import {
    ADD_SCHEDULE,
    SORT_SCHEDULE,
    DELETE_SCHEDULE,
    DELETE_ALL_SCHEDULS,
    ISOPEN_TOGGLE
}from '../action/index'

const sortSchedules = (state) =>{
    state.sort((a,b)=>{ 
        if(a.date < b.date){
            return -1
        }else if(a.date === b.date){
            if(a.time > b.time){
                return -1
            }else{
                return 1
            }
        }else{
            return 1
        }
    })
}

const schedules = (state =[],action) =>{
    switch(action.type){
        case ADD_SCHEDULE:
            const schedule = {date: action.date ,time: action.time ,title: action.title ,description: action.description, isOpen:false}
            const id = state.length === 0 ? 1 : state.length + 1
            const newState =  [...state, {id: id, ...schedule}]
            sortSchedules(newState)
            return newState
        case SORT_SCHEDULE:
            state.sort((a,b)=>{ 
                if(a.date < b.date){
                    return -1
                }else if(a.date === b.date){
                    if(a.time > b.time){
                        return -1
                    }else{
                        return 1
                    }
                }else{
                    return 1
                }
            })
            return state
        case DELETE_SCHEDULE:
            state = state.filter((schedule)=>{
                return schedule.id !== action.id
            }) 
            return state
        case DELETE_ALL_SCHEDULS:
            return state=[]
        default:
            return state
    }
}

export default schedules