import { LIGHT_SCHEME, DARK_SCHEME } from "../types";

export const lightScheme = () => {
    localStorage.setItem("color-scheme", "light");
    return {
        type: LIGHT_SCHEME
    }
}

export const darkScheme = () => {
    localStorage.setItem("color-scheme", "dark");
    return {
        type: DARK_SCHEME
    }
}