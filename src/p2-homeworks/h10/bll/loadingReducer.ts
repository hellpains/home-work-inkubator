const initState = {
    loading: false
}
export type InitStateType = typeof initState
export type ActionType = ReturnType<typeof loadingAC>
export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                loading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean) => {
    return {
        type: 'CHANGE-LOADING',
        isLoading
    } as const
}