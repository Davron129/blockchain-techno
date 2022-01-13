import { AnyAction } from 'redux';
import { ENABLE_SCROLL, DISABLE_SCROLL } from '../types/index'

interface InitialStateInterface {
    isScrollable: boolean
}

const InitialState: InitialStateInterface = {
    isScrollable: true
}

export const scroll = (state = InitialState, action: AnyAction) => {
    switch (action.type) {
        case ENABLE_SCROLL:
            return {
                isScrollable: true
            }
        case DISABLE_SCROLL:
            return {
                isScrollable: false
            }
        default:
            return state
    }
}