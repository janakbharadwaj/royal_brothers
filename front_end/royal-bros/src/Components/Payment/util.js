export function getTimeString(second){
    const sec = second  % 60;
    const min = Math.floor(second  / 60) % 60;
    const hr = Math.floor(second / (60 * 60))

    return `${String(hr).padStart(2,"0")} ${hr>1? "hours" : " hour " }  
    : ${String(min).padStart(2,"0")} ${min>1? "minutes" : " minute " }  
    : ${String(sec).padStart(2,"0")} ${sec>1? "seconds" : " second " }  `
}

