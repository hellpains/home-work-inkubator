const initState = {
    themes: ['dark', 'red', 'some'],
    value:'red',
};

export const themeReducer = (state = initState, action: ActionsType): any => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                value: action.option
            }
        }
        default:
            return state;
    }
};

type ActionsType=ReturnType<typeof changeThemeC>


export const changeThemeC = (option:string): any => {
    return {
        type:'CHANGE-THEME',
        option

    }as const
};