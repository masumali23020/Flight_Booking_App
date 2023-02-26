import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionType"

export const added = (todoText) => {
    return {
        type: ADDED,
        payload:todoText,

    }

}
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload:todoId,

    }

}
export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload:{
            todoId,
            color,
        }

    }

}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,

    }

}
export const allCompleed = () => {
    return {
        type: ALLCOMPLETED,
       

    }

}
export const clearCompleed = () => {
    return {
        type: CLEARCOMPLETED,
       

    }

}