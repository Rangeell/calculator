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

    // FUNCTION - FORMAT STOPWATCH
    function getTimeString(rawMiliseconds) {
        const minutes = padZero(Math.floor(rawMiliseconds / 60000))
        const seconds = padZero(Math.floor(rawMiliseconds % 60000 / 1000))
        const miliseconds = padZero(Math.floor(rawMiliseconds % 1000 / 10))
        return `${minutes}:${seconds},${miliseconds}`
    }

    let miliseconds = 0
    let currentStopWatch = null
    const stopwatchSection = document.querySelector('.stopwatch')

    const button_LepReset = document.querySelector('.lap-reset-button')

    // FUNCTION - START STOPWATCH
    const button_Start = document.querySelector('.start-button')
    button_Start.addEventListener('click', start)
    function start() {
        button_Start.classList.toggle('stop-button')

        if (button_Start.classList.contains('stop-button')) {
            button_Start.innerText = 'Stop'
            button_LepReset.classList.add('active')
            button_LepReset.innerText = 'Lap'

            currentStopWatch = setInterval(function () {
                miliseconds += 10
                const stopwatch = getTimeString(miliseconds)
                stopwatchSection.innerText = stopwatch
            }, 10)
        } else {
            button_Start.innerText = 'Start'
            button_LepReset.innerText = 'Reset'
            clearInterval(currentStopWatch)
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            start()
        }
    })

    // FUNCTION - RESET STOPWATCH
    button_LepReset.addEventListener('click', function () {
        if (this.innerText === 'Reset') {
            clearInterval(currentStopWatch)
            miliseconds = 0
            stopwatchSection.innerText = '00:00,00'
        }

        if (stopwatchSection.innerText === '00:00,00') {
            this.classList.remove('active')
            this.innerText = 'Lap'
        }
    })
})()
