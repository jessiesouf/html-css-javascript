let lamp = window.document.getElementById('lamp');
let int = window.document.querySelector('#int');

function onOff() {
    if (lamp.className === "off") {
        lamp.src = "img/lampada-ligada.png"
        int.src = "img/interruptor-ligado.png"
        document.body.style.background = "radial-gradient(circle at center 40%, #ffe26e, 2%, #000)"
        lamp.className = "on"
        int.className = "on";
    } else {
        lamp.src = "img/lampada-desligada.png"
        int.src = "img/interruptor-desligado.png"
        document.body.style.background = "#fff"
        lamp.className = "off"
        int.className = "off";
    }
}

int.addEventListener("click", onOff);