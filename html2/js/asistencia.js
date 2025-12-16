var registroAsistencia = [];

function registrarAsistencia() {
    var ficha = document.getElementById("fichas").value.substring(0, 7).trim();
    var aprendices = document.getElementsByName("aprendiz[]");
    asistencia = [];
    for (var i = 0; i<aprendices.length; i++) {
        if (aprendices[i].checked) {
            asistencia.push(aprendices[i].value);
        }
    }
    registroAsistencia[ficha]=asistencia;
    console.log(registroAsistencia);
}





function cargaraprendices() {
    var option = document.getElementById("fichas").value;
    var ficha = option.substring(0, 7);
    var carga = new XMLHttpRequest();
    carga.open("GET", ficha + ".txt", true);
    carga.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            document.getElementById("Listadeaprendices").innerHTML = getFilasAprendices(this.responseText);
        }  else if (this.readyState == 4 && this.status == 404) {
            alert("no se encontraron aprendices para la ficha seleccionada");
            document.getElementById("Listadeaprendices").innerHTML="";
        }
    }
    carga.send();
}

function getFilasAprendices(cadena) {
    var filas = "";
    var aprendices = cadena.split("\n");
    for (var i = 0; i<aprendices.length; i++) { 
        filas += "<tr><td>" + aprendices[i] + "</td><td><input type='checkbox' name='aprendiz[]' value='"+aprendices[i]+"'/></td></tr>";
    }
    return filas;
}


function cargarfichas() {
    var carga = new XMLHttpRequest();
    carga.open("GET", "fichas.txt", true);
    carga.onreadystatechange = function() {      
        if (this.readyState === 4 && this.status === 200){
            document.getElementById("fichas").innerHTML= "<Option>Selecciones una fichas</Option><br/>"+this.responseText; 

        }  
    } 
    carga.send();
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                