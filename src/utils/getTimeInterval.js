export const getTimeInterval = (time) => {
    const interval = Date.now() - time * 1000;
    
    const sec = Math.floor(interval/1000);
    const min = Math.floor(interval/(1000 * 60));
    const hour = Math.floor(interval/(1000 * 60 * 60));
    const day = Math.floor(interval/(1000 * 60 * 60 * 24));
    const month = Math.floor(interval/(1000 * 60 * 60 * 24 * 30));
    const year = Math.floor(interval/(1000 * 60 * 60 * 24 * 365));

    if(year) return `${year} yil, ${month%12} oy oldin`;
    if(month) return `${month} oy oldin`;
    if(day) return `${day} kun oldin`;
    if(hour) return `${hour} soat oldin`;
    if(min) return `${min} daqiqa oldin`;
    if(sec) return `${sec} sekund oldin`;

    return null
}