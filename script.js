function setMiliseconds(){
    miliseconds = 0
    msShow = 0
    toSeconds = 0
    const stopwatchTime = document.getElementById("miliseconds")
    setInterval(() => {
        miliseconds += 1
        msShow += 1
        toSeconds += 1
        if(parseInt(miliseconds % 100) == 0){
            setSeconds(parseInt(miliseconds), parseInt(toSeconds))
            if(parseInt(toSeconds % 6000) == 0) toSeconds = 0
            msShow = 0
        }
        if(msShow < 10){
        stopwatchTime.innerText = `0${msShow}`
        }else{
            stopwatchTime.innerText = `${msShow}`
        }
        return miliseconds
    }, 10);
}

function setSeconds(ms, msS){
    let seconds = ms/100
    let secondsShow = msS/100

    console.log(`${seconds} ${secondsShow}`)
    const stopwatchTime = document.getElementById("seconds")
    if(seconds % 60 == 0){
        setMinutes(seconds)
    }
    if(secondsShow < 10){ stopwatchTime.innerText = `0${secondsShow}`}
    else{
        stopwatchTime.innerText = `${secondsShow}`
    }
}

function setMinutes(seconds){
    let minutes = seconds/60
    const stopwatchTime = document.getElementById("minutes")

    if(minutes % 60 == 0){
        setHours(minutes)
        minutes = 0
    }
    if(minutes < 10){ stopwatchTime.innerText = `0${minutes}`}
    else{
        stopwatchTime.innerText = `${minutes}`
    }
}

function setHours(minutes) {
    const stopwatchTime = document.getElementById("hours")

    const hours = minutes/60
    if(hours < 10){ stopwatchTime.innerText = `0${hours}`}
    else{
        stopwatchTime.innerText = `${hours}`
    }
}

setMiliseconds()