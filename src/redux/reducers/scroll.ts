import { AnyAction } from 'redux';

interface InitialStateInterface {
    isScrollable: boolean
}

const InitialState: InitialStateInterface = {
    isScrollable: true
}

export const scroll = (state = InitialState, action: AnyAction) => {
    switch (action.type) {
        case 'IS_OFF':
            return {
                isScrollable: action.payload
            }
        case 'IS_ON':
            return {
                isScrollable: action.payload
            }
        default:
            return state
    }
}