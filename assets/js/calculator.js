(function myScope() {

    // FUNCTIONS TO GET  & SET TIME IN CLOCK
    function getTime(clock) {
        const today = new Date()
        const time = today.toLocaleTimeString('pt-BR', { timeStyle: 'short' })
        return clock.innerText = `${time}`
    }

    function setTime() {
        const clock = document.querySelector('#hours')
        getTime(clock)
    }
    setTime()
    setInterval(setTime, 1000)

    // FUNCTION OPEN MENU
    const button = document.querySelector('.menu')
    button.addEventListener('click', function () {
        const themesContainer = document.querySelector('.themes')

        this.classList.toggle('menu-open')
        themesContainer.classList.toggle('themes-open')
    })

    // FUNCTION OPEN HISTORY
    const buttonHistory = document.querySelector('#history-button')
    buttonHistory.addEventListener('click', function () {
        const container = document.querySelector('.history')
        container.classList.toggle('history-open')
    })

    /*
    function hasAnyClass(element, classes) {
        return classes.some(function(className) {
            return element.classList.contains(className)
        })
    }
    */

    // CALCULATOR AREA
    const res = document.querySelector('.result')

    const button_Calculator = {
        numbers: document.querySelectorAll('.buttons-numbers'),
        utilities: document.querySelectorAll('.buttons-utilities'),
        operators: document.querySelectorAll('.buttons-operators')
    }

    // function add number
    button_Calculator.numbers.forEach(function (button) {
        button.addEventListener('click', function () {
            if (res.innerText === '0') {
                res.innerText = button.textContent
            } else {
                res.innerText += button.textContent
                res.scrollLeft = res.scrollWidth
            }
        })
    })

    // function backspace & AC
    button_Calculator.utilities.forEach(function (button) {
        button.addEventListener('click', function () {
            switch (button.innerText) {
                case 'backspace':
                    res.innerText = res.innerText.slice(0, -1)
                    if (res.innerText === '') {
                        res.innerText = '0'
                    }
                    break

                case 'AC':
                    res.innerText = '0'
                    break
            }
        })
    })

    // function calculate
    button_Calculator.operators.forEach(function (button) {
        button.addEventListener('click', function () {
            const comando = button.innerText
            let expressao = res.innerText
            let ultimoCaractere = expressao.slice(-1)
            let operadores = ['+', '-', 'x', '/']

            if (comando !== '=') {
                if (operadores.includes(ultimoCaractere) && operadores.includes(comando)) {
                    res.innerText = expressao.slice(0, -1) + comando
                    res.scrollLeft = res.scrollWidth
                } else {
                    res.innerText += comando
                    res.scrollLeft = res.scrollWidth
                }
            } else {
                if (expressao.indexOf('+') !== - 1) {
                    let partes = expressao.split('+')
                    console.log(partes)
                    let soma = 0
                    for (let i in partes) {
                        soma += Number(partes[i])
                        res.innerText = soma
                    }
                }
            }
        })
    })

    // THEMES AREA
    const body = document.body

    // function light/dark theme
    const buttonLightDark = document.querySelector('#light-button')
    buttonLightDark.addEventListener('click', function () {
        const icon = document.querySelector('#sunny-icon')

        if (!body.classList.contains('light')) {
            body.classList.add('light')
            icon.innerHTML = 'nightlight'
        } else {
            body.classList.remove('light')
            icon.innerHTML = 'sunny'
        }
    })

    const theme_button = {
        pink: document.querySelector('#pink-theme'),
        blue: document.querySelector('#blue-theme'),
        purple: document.querySelector('#purple-theme'),
        default: document.querySelector('#default-theme')
    }

    // function pink theme
    theme_button.pink.addEventListener('click', function () {
        if (!body.classList.contains('pink')) {
            body.classList.add('pink')
            body.classList.remove('blue', 'purple')
        } else {
            body.classList.remove('pink')
        }
    })

    // function blue theme
    theme_button.blue.addEventListener('click', function () {
        if (!body.classList.contains('blue')) {
            body.classList.add('blue')
            body.classList.remove('pink', 'purple')
        } else {
            body.classList.remove('blue')
        }
    })

    // function purple theme
    theme_button.purple.addEventListener('click', function () {
        if (!body.classList.contains('purple')) {
            body.classList.add('purple')
            body.classList.remove('pink', 'blue')
        } else {
            body.classList.remove('purple')
        }
    })

    // function reset to default theme
    theme_button.default.addEventListener('click', function () {
        body.classList.remove('pink', 'blue', 'purple')
    })
})()
