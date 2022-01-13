import { AnyAction } from 'redux';
import { LIGHT_SCHEME, DARK_SCHEME } from '../types/index'

interface InitialStateInterface {
    isLight: boolean
}

const InitialState: InitialStateInterface = {
    isLight: localStorage.getItem('color-scheme') === "dark" ? false : true
}

export const colorScheme = (state = InitialState, action: AnyAction) => {
    switch (action.type) {
        case LIGHT_SCHEME:
            return {
                isLight: true
            }
        case DARK_SCHEME:
            return {
                isLight: false
            }
        default:
            return state
    }
}