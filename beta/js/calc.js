function calcular() {
    var valor_1 = Number(document.getElementById("valor_1").value);
    var valor_2 = Number(document.getElementById("valor_2").value);
    var valor_3 = Number(document.getElementById("valor_3").value);
    var valor_4 = Number(document.getElementById("valor_4").value);
    var elemResult = document.getElementById("v");

    if (elemResult.textContent === undefined) {
       elemResult.textContent = "  " + String(valor_1 + valor_2 + valor_3 + valor_4) + ".";
    }
    else { // IE
       elemResult.innerText = "  " + String(valor_1 + valor_2 + valor_3 + valor_4) + "";
    }
}