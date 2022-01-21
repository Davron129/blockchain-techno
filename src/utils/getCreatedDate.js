import { getFormattedDay } from './data';

export const getCreatedDate = (prevPostTime, postTime) => {
    if(prevPostTime) {
        if(getFormattedDay(prevPostTime) === getFormattedDay(postTime)) {
            return null;
        } else {
            return getFormattedDay(postTime)
        }
    } else if(getFormattedDay(postTime) === getFormattedDay(Date.now())) {
        return "Bugun"
    } else {
        return getFormattedDay(postTime)
    }
}