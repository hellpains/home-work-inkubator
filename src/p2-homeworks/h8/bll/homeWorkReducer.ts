import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: HomeWorkReducerActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
            }
            return state
        }
        case 'CHECK': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}


type HomeWorkReducerActionType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>
export const sortAC = (upAndDown: string) => {
    return {
        type: 'SORT',
        payload: upAndDown

    }
}

// export const sortDownAC = () => {
//     return {
//         type:'SORT-DOWN',
//         payload:'down'
//     }
// }
export const checkAC = (number: number) => {
    return {
        type: 'CHECK',
        payload: number
    }
}