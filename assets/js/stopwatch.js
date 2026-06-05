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

    // STOPWATCH SECTION
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
    let stopwatch = null
    const main = document.querySelector('main')
    const stopwatchSection = document.querySelector('.stopwatch')
    const button_LepReset = document.querySelector('.lap-reset-button')

    function stopwatchInterval() {
        stopwatch = setInterval(function () {
            miliseconds += 10
            stopwatchSection.innerText = getTimeString(miliseconds)
        }, 10)
    }

    // FUNCTION - START STOPWATCH
    const button_Start = document.querySelector('.start-button')
    button_Start.addEventListener('click', start)
    function start() {
        button_Start.classList.toggle('stop-button')

        const isRunning = button_Start.classList.contains('stop-button')
        if (isRunning) {
            button_Start.innerText = 'Stop'
            button_LepReset.classList.add('active')
            button_LepReset.innerText = 'Lap'
            stopwatchInterval()

        } else {
            button_Start.innerText = 'Start'
            button_LepReset.innerText = 'Reset'
            clearInterval(stopwatch)
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') return start()
    })

    // FUNCTION - RESET STOPWATCH
    button_LepReset.addEventListener('click', function () {
        
        const isRunning = button_Start.classList.contains('stop-button')
        if (this.innerText === 'Lap' && isRunning) {
            const lapSection = createSectionLap()
            const hr = document.createElement('hr')
            lapSection.append(createLiLap(), createLiTime())
            main.append(lapSection, hr)
        }
        
        if (this.innerText === 'Reset') {
            clearInterval(stopwatch)
            miliseconds = 0
            stopwatchSection.innerText = '00:00,00'
            const laps = main.querySelectorAll('.laps, hr')
            laps.forEach( function (e) {
                e.remove()
            }) 
        }
        
        if (stopwatchSection.innerText === '00:00,00') {
            this.classList.remove('active')
            this.innerText = 'Lap'
        }
    })

    function createSectionLap () {
        const lapSection = document.createElement('section')
        lapSection.setAttribute('class', 'laps')
        return lapSection
    }

    function createUlLap() {
        const ulLap = document.createElement('ul')
        ulLap.setAttribute('class', 'lap-number')
        return ulLap
    }

    function createLiLap() {
        const liLap = document.createElement('li')
        liLap.innerText = 'Teste 1'
        const ulLap = createUlLap()
        ulLap.append(liLap)
        return ulLap
    }

    function createUlTime() {
        const ulTime = document.createElement('ul')
        ulTime.setAttribute('class', 'lap-time')
        return ulTime
    }

    function createLiTime() {
        const liTime = document.createElement('li')
        const ulTime = createUlTime()
        liTime.innerText = '00:00,00'
        ulTime.append(liTime)
        return ulTime
    }

    function clearUl(ulLap, ulTime) {
        main.remove(ulLap, ulTime)
    }
})()
