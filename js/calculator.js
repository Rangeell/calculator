let light = document.querySelector('#light')
console.log(light)
let sunny_icon = document.querySelector('#sunny-icon')

light.addEventListener('click', function(){
    if (document.body.className != 'light'){
        document.body.classList.add('light')
        sunny_icon.innerHTML = 'nightlight'
    } else {
        document.body.classList.remove('light')
        sunny_icon.innerHTML = 'sunny'
    }
})
