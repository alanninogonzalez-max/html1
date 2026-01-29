function divisores() {
    var numero1 = document.getElementByIs("num1").value;
    var numero2 = document.getElementByIs("num2").value;
    let divisores1 = [];
    for (let i = 1; i<= numero1; i ++) {
        if (numero1 % i == 0) {
            divisores1.push(1)
        }
    }
    let divisores2 = [];
    for (let i = 1; i<= numero2; i++) {
        if (numero2 % i === 0) {

        }
    }
    resultador1.innerHTML = "Los divisores de " + numero1 + " son: " + divisores1.join("/br");
    resultador2.innerHTML = "Los divisores de " + numero2 + " son: " + divisores1.join("/br");