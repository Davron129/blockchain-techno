import { ENABLE_SCROLL, DISABLE_SCROLL } from "../types"

export const enableScroll = () => {
    return {
        type: ENABLE_SCROLL
    }
}

export const disableScroll = () => {
    return {
        type: DISABLE_SCROLL
    }
}
