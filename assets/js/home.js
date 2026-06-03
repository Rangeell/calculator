(function myScope() {

    function getTime(clock) {
        const today = new Date()
        const time = today.toLocaleTimeString('pt-BR', {
            timeStyle: 'short'
        })
        return clock.innerText = `${time}`
    }

    function setTime() {
        const clock = document.querySelector('.clock')
        getTime(clock)
    }
    setTime()
    setInterval(setTime, 1000)
})()