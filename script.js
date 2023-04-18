function abrir() {
    var msg = document.getElementById('msg')
    var sorry = document.querySelector('#sorry')
    var button = document.querySelector('#button')
    button.style.display = 'none'
    sorry.style.display = 'block'
    msg.style.opacity = '1'
    msg.style.transition = 'opacity 1s ease-out'
}