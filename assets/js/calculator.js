(function myScope() {
    const today = new Date()
    const hours = String(today.getHours()).padStart(2, '0')
    const minutes = String(today.getMinutes()).padStart(2, '0')

    const body = document.body
    const res = document.querySelector('.result')
    const clock = document.querySelector('#hours')

    const button_Menu = document.querySelector('.menu')
    const themes_Container = document.querySelector('.themes')

    const history = {
        container: document.querySelector('.history'),
        button: document.querySelector('#history-button')
    }

    const theme_button = {
        light_night: document.querySelector('#light-button'),
        sunny_icon: document.querySelector('#sunny-icon'),
        pink: document.querySelector('#pink-theme'),
        blue: document.querySelector('#blue-theme'),
        purple: document.querySelector('#purple-theme'),
        default: document.querySelector('#default-theme')
    }

    const button_Calculator = {
        numbers: document.querySelectorAll('.buttons-numbers'),
        utilities: document.querySelectorAll('.buttons-utilities'),
        operators: document.querySelectorAll('.buttons-operators')
    }

    /*
    function hasAnyClass(element, classes) {
        return classes.some(function(className) {
            return element.classList.contains(className)
        })
    }
    */

    clock.innerHTML = `${hours}:${minutes}`

    // FUNCTION ADD NUMBER
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

    // FUNCTION BACKSPACE and AC
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

    // FUNCTION CALCULATE
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

    // FUNCTION OPEN MENU
    button_Menu.addEventListener('click', function () {
        button_Menu.classList.toggle('menu-open')
        themes_Container.classList.toggle('themes-open')
    })

    // FUNCTION OPEN HISTORY
    history.button.addEventListener('click', function(){
        history.container.classList.toggle('history-open')
    })

    // FUNCTION LIGHT/DARK THEME
    theme_button.light_night.addEventListener('click', function () {
        const icon = theme_button.sunny_icon

        if (!body.classList.contains('light')) {
            body.classList.add('light')
            icon.innerHTML = 'nightlight'
        } else {
            body.classList.remove('light')
            icon.innerHTML = 'sunny'
        }
    })

    // FUNTION PINK THEME
    theme_button.pink.addEventListener('click', function () {
        if (!body.classList.contains('pink')) {
            body.classList.add('pink')
            body.classList.remove('blue', 'purple')
        } else {
            body.classList.remove('pink')
        }
    })

    // FUNCTION BLUE THEME
    theme_button.blue.addEventListener('click', function () {
        if (!body.classList.contains('blue')) {
            body.classList.add('blue')
            body.classList.remove('pink', 'purple')
        } else {
            body.classList.remove('blue')
        }
    })

    // FUNCTION PURPLE THEME
    theme_button.purple.addEventListener('click', function () {
        if (!body.classList.contains('purple')) {
            body.classList.add('purple')
            body.classList.remove('pink', 'blue')
        } else {
            body.classList.remove('purple')
        }
    })

    // FUNCTION RESETE TO DEFAULT THEME
    theme_button.default.addEventListener('click', function () {
        if (body.classList.contains('pink') ||
            body.classList.contains('blue') ||
            body.classList.contains('purple')) {

            body.classList.remove('pink', 'blue', 'purple')
        }
    })
})()
