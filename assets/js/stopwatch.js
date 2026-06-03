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

    let currentSeconds = 0
    let currentStopWatch = 0

    function padZero(time) {
        const formartTime = time.toString().padStart('2', 0)
        return formartTime
    }
    function formatStopWatch(rawSeconds) {
        const minutes = Math.floor(rawSeconds / 60)
        return `${minutes}:`
    }
    console.log(formatStopWatch(60))
})()