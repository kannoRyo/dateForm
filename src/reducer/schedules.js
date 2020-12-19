import {
    ADD_SCHEDULE,
    SORT_SCHEDULE,
    DELETE_SCHEDULE,
    DELETE_ALL_SCHEDULS,
    HANDLE_OPEN,
    HANDLE_CLOSE,
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
                
            }) 
            return state
        case DELETE_ALL_SCHEDULS:
            return state=[]
        case HANDLE_OPEN:
            let num = 0
            state = state.filter((schedule)=>{
                if(schedule.id === action.id){
                    num = action.id
                }
                return schedule.id !== action.id
            })      
            console.log(num)   
            state.splice(num,0,{id: action.id,date: action.date ,time: action.time ,title: action.title ,description: action.description, isOpen:true})   
            // sortSchedules(state)
            return state
        case HANDLE_CLOSE:
            let num2 = 0
            state = state.filter((schedule)=>{
                if(schedule.id === action.id){
                    num2 = action.id
                }
                return schedule.id !== action.id
            })      
            console.log(num2)   
            state.splice(num2,0,{id: action.id,date: action.date ,time: action.time ,title: action.title ,description: action.description, isOpen:false})   
            sortSchedules(state)
            return state
        default:
            return state
    }
}

export default schedules