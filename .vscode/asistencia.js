function cargarfichas() {
    var carga = new XMLHttpRequest();
    carga.open("get", "fichar.txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("fichas").innerHTML = this.responseText;
        }
    }
}