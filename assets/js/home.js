(function myScope() {

    function getTime() {
        const today = new Date()
        const hour = today.toLocaleTimeString('pt-BR', {
            timeStyle: 'short'
        })
        return hour
    }

    function setTime() {
        const clock = document.querySelector('.clock')
        clock.innerText = getTime()
    }
    setTime()
    setInterval(setTime, 1000)
})()