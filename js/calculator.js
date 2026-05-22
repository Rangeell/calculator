const today = new Date()
const hours = String(today.getHours()).padStart(2, '0')
const minutes = String(today.getMinutes()).padStart(2, '0')

const body = document.body
const clock = document.querySelector('#hours')

const button_Menu = document.querySelector('.menu')
const themes_container = document.querySelector('.themes')

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
    utilities: document.querySelectorAll('.buttons-utilities')
}

const res = document.querySelector('.result')
console.log(button_Calculator.numbers)

/*
function hasAnyClass(element, classes) {
    return classes.some(function(className) {
        return element.classList.contains(className)
    })
}
*/

clock.innerHTML = `${hours}:${minutes}`
button_Calculator.utilities.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.innerText === 'AC') {
            res.innerText = '0'
        }
    })
})


button_Calculator.numbers.forEach(function(button){
    button.addEventListener('click', function(){
        if (res.innerText === '0') {
            res.innerText = button.textContent
        } else
        res.innerText += button.textContent
    })
})

// FUNCTION OPEN MENU
button_Menu.addEventListener('click', function () {
    button_Menu.classList.toggle('menu-open')
    themes_container.classList.toggle('themes-open')

})

// FUNCTION LIGHT/DARK THEME
theme_button.light_night.addEventListener('click', function () {
    if (!body.classList.contains('light')) {
        body.classList.add('light')
        theme_button.sunny_icon.innerHTML = 'nightlight'
    } else {
        body.classList.remove('light')
        theme_button.sunny_icon.innerHTML = 'sunny'
    }
})

// FUNTION PINK THEME
theme_button.pink.addEventListener('click', function () {
    if (!body.classList.contains('pink')) {
        body.classList.add('pink')
        body.classList.remove('blue')
        body.classList.remove('purple')
    } else {
        body.classList.remove('pink')
    }
})

// FUNCTION BLUE THEME
theme_button.blue.addEventListener('click', function () {
    if (!body.classList.contains('blue')) {
        body.classList.add('blue')
        body.classList.remove('pink')
        body.classList.remove('purple')
    } else {
        body.classList.remove('blue')
    }
})

// FUNCTION PURPLE THEME
theme_button.purple.addEventListener('click', function () {
    if (!body.classList.contains('purple')) {
        body.classList.add('purple')
        body.classList.remove('pink')
        body.classList.remove('blue')
    } else {
        body.classList.remove('purple')
    }
})

// FUNCTION RESETE TO DEFAULT THEME
theme_button.default.addEventListener('click', function () {
    if (body.classList.contains('pink') ||
        body.classList.contains('blue') ||
        body.classList.contains('purple')) {

        body.classList.remove('pink')
        body.classList.remove('blue')
        body.classList.remove('purple')
    }
})