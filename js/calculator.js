let light_button = document.querySelector('#light-button')
console.log(light_button)
let sunny_icon = document.querySelector('#sunny-icon')

// FUNCTION LIGHT/DARK THEME
light_button.addEventListener('click', function(){
    if (document.body.className != 'light'){
        document.body.classList.add('light')
        sunny_icon.innerHTML = 'nightlight'
    } else {
        document.body.classList.remove('light')
        sunny_icon.innerHTML = 'sunny'
    }
})
