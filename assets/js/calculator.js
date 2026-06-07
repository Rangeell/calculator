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

    function Calculator() {
        this.res = document.querySelector('.result')

        this.start = () => {
            this.clickButtons()
        }

        this.clickButtons = () => {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('buttons-numbers')) this.addNumber(el.innerText)
                if (el.classList.contains('buttons-operators')) this.addOperator(el.innerText)
                if (el.id === 'ac') this.ac()
                if (el.classList.contains('backspace')) this.backspace()
            })
        }

        this.addNumber = (value) => {
            if (this.res.innerText === '0') this.res.innerText = value
            else this.res.innerText += value
        }

        this.addOperator = (value) => {
            const operators = ['/', '+', '-', 'x']
            let lastCaracter = this.res.innerText.slice(-1)

            if (this.res.innerText === '0') return
            if (operators.includes(lastCaracter)) {
                this.res.innerText = this.res.innerText.slice(0, -1) + value
            }
            else this.res.innerText += value
        }

        this.ac = () => {
            this.res.innerText = '0'
        }

        this.backspace = () => {
            this.res.innerText = this.res.innerText.slice(0, -1)
            if (this.res.innerText === '') this.res.innerText = '0'
        }
    }
    const calculator = new Calculator()
    calculator.start()

    /*    const res = document.querySelector('.result')
    
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
                        let sum = 0
                        for (let v of partes) {
                            sum += Number(v)
                        }
                        res.innerText = sum
                    }
                }
            })
        })
    */
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
