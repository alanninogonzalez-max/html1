function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado = document.getElementById('resultado');
    var mensaje = document.getElementById('mensaje');
    
    
    mensaje.textContent = '';
    
    if (operacion === 'factorial') {
        
        if (isNaN(num1)) {
            mensaje.textContent = 'Error: Ingresa un número para calcular el factorial';
            resultado.value = '';
            return;
        }
        
        
        if (num1 < 0 || !Number.isInteger(num1)) {
            mensaje.textContent = 'Error: El factorial solo está definido para enteros no negativos';
            resultado.value = '';
            return;
        }
        
        
        var res = 1;
        for (var i = 2; i <= num1; i++) {
            res *= i;
        }
        
        resultado.value = res;
        mensaje.textContent = num1 + '! = ' + res;
        return;
    }
    
    
    if (isNaN(num1) || isNaN(num2)) {
        mensaje.textContent = 'Error: Ingresa ambos números';
        resultado.value = '';
        return;
    }
    
    if (operacion === '') {
        mensaje.textContent = 'Error: Selecciona una operación';
        return;
    }
    
    var res;
    var simbolo = '';
    
    if (operacion === 'suma') {
        res = num1 + num2;
        simbolo = '+';
    } else if (operacion === 'resta') {
        res = num1 - num2;
        simbolo = '-';
    } else if (operacion === 'multiplicacion') {
        res = num1 * num2;
        simbolo = '×';
    } else if (operacion === 'division') {
        if (num2 === 0) {
            mensaje.textContent = 'Error: No se puede dividir entre cero';
            resultado.value = '';
            return;
        }
        res = num1 / num2;
        simbolo = '÷';
    }
    
    
    resultado.value = res;
    
    
    mensaje.textContent = num1 + ' ' + simbolo + ' ' + num2 + ' = ' + res;
}