import { ENABLE_SCROLL, DISABLE_SCROLL } from "../types"

export const enableScroll = () => {
    document.body.setAttribute("data-scroll", "true");

    return {
        type: ENABLE_SCROLL
    }
}

export const disableScroll = () => {
    document.body.setAttribute("data-scroll", "false");
    return {
        type: DISABLE_SCROLL
    }
}
