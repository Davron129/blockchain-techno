export const getFormattedTime = (time) => {
    const h = new Date(time).getHours();
    const m = new Date(time).getMinutes();
    const hour = h > 9 ? h : `0${h}`;
    const min = m > 9 ? m : `0${m}`;

    return `${hour}:${min}`
}

export const getFormattedDay = (time) => {
    const d = new Date(time).getDay();
    const m = new Date(time).getMonth() + 1;
    const y = new Date(time).getFullYear();

    const day = d > 9 ? d : `0${d}`;
    const month = m > 9 ? m : `0${m}`;

    return `${day}.${month}.${y}`
}