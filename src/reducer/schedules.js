import { useState } from 'react'
import {
    ADD_SCHEDULE,
    DELETE_SCHEDULE,
    DELETE_ALL_SCHEDULS
}from '../action/index'

const schedules = (state =[],action) =>{
    switch(action.type){
        case ADD_SCHEDULE:
            const schedule = {date: action.title ,title: action.title ,description: action.description}
            const id = state.length === 0 ? 1 : state.length.id + 1
            return [...state, {id: id, ...schedule}]
        case DELETE_SCHEDULE:
            break
        case DELETE_ALL_SCHEDULS:
            break
        default:
            return state=[]
    }
}

export default schedules