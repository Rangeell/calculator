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
    function getTimeString(rawMiliseconds) {
        const minutes = padZero(Math.floor(rawMiliseconds / 60000))
        const seconds = padZero(Math.floor(rawMiliseconds % 60000 / 1000))
        const miliseconds = padZero(Math.floor(rawMiliseconds % 1000 / 10))
        return `${minutes}:${seconds},${miliseconds}`
    }

    let miliseconds = 0
    let currentStopWatch = null
    const stopwatchSection = document.querySelector('.stopwatch')

    // FUNCTION STOPWATCH
    const start_Button = document.querySelector('.start-button')
    start_Button.addEventListener('click', function () {
        this.classList.toggle('stop-button')

        if (this.classList.contains('stop-button')) {
            this.innerText = 'stop'
            

            currentStopWatch = setInterval(function () {
                miliseconds += 10
                const stopwatch = getTimeString(miliseconds)
                stopwatchSection.innerText = stopwatch
            }, 10)
        } else {
            this.innerText = 'start'
            clearInterval(currentStopWatch)
        }
    })
})()
