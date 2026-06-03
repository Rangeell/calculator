(function myScope() {

    // FUNCTION GET & SET TIME ON CLOCK
    function getTime(clock) {
        const today = new Date()
        const time = today.toLocaleTimeString('pt-BR', {
            timeStyle: 'short'
        })
        return clock.innerText = time
    }
    
    function setTime() {
        const clock = document.querySelector('.clock')
        getTime(clock)
    }
    setTime()
    setInterval(setTime, 1000)

    // FUNCTION - PADZERO
    function padZero(time) {
        const formartTime = time.toString().padStart('2', 0)
        return formartTime
    }

    // FUNCTION FORMAT STOPWATCH
    function formatStopWatch(rawMiliseconds) {
        const minutes = padZero(Math.floor(rawMiliseconds / 60000))
        const seconds = padZero(Math.floor(rawMiliseconds % 60000 / 1000))
        const miliseconds = padZero(Math.floor(rawMiliseconds % 1000 / 10))
        return `${minutes}:${seconds}:${miliseconds}`
    }
    console.log(formatStopWatch(72500))

    let currentMiliseconds = 0
    let currentStopWatch = 0
})()
