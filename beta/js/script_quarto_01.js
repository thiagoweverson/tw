function salvar(){
localStorage.cliente = document.getElementById("cliente").value;
localStorage.hora_entrada = document.getElementById("hora_entrada").value;
localStorage.hora_saida = document.getElementById("hora_saida").value;
localStorage.q_h = document.getElementById("q_h").value;
localStorage.valor_h = document.getElementById("valor_h").value;
localStorage.consumo_1 = document.getElementById("consumo_1").value;
localStorage.quant_1 = document.getElementById("quant_1").value;
localStorage.valor_1 = document.getElementById("valor_1").value;
localStorage.consumo_2 = document.getElementById("consumo_2").value;
localStorage.quant_2 = document.getElementById("quant_2").value;
localStorage.valor_2 = document.getElementById("valor_2").value;
localStorage.consumo_3 = document.getElementById("consumo_3").value;
localStorage.quant_3 = document.getElementById("quant_3").value;
localStorage.valor_3 = document.getElementById("valor_3").value;
localStorage.consumo_4 = document.getElementById("consumo_4").value;
localStorage.quant_4 = document.getElementById("quant_4").value;
localStorage.valor_4 = document.getElementById("valor_4").value;
localStorage.consumo_5 = document.getElementById("consumo_5").value;
localStorage.quant_5 = document.getElementById("quant_5").value;
localStorage.valor_5 = document.getElementById("valor_5").value;
localStorage.consumo_6 = document.getElementById("consumo_6").value;
localStorage.quant_6 = document.getElementById("quant_6").value;
localStorage.valor_6 = document.getElementById("valor_6").value;
localStorage.consumo_7 = document.getElementById("consumo_7").value;
localStorage.quant_7 = document.getElementById("quant_7").value;
localStorage.valor_7 = document.getElementById("valor_7").value;
localStorage.vt = document.getElementById("vt").value;
localStorage.obs = document.getElementById("obs").value;
localStorage.consumo_1 = document.getElementById("consumo_1").value;
}



function carregar(){
if (localStorage.cliente){
document.getElementById("cliente").value = localStorage.cliente;
document.getElementById("hora_entrada").value = localStorage.hora_entrada;
document.getElementById("hora_saida").value = localStorage.hora_saida;
document.getElementById("q_h").value = localStorage.q_h;
document.getElementById("valor_h").value = localStorage.valor_h;
document.getElementById("consumo_1").value = localStorage.consumo_1;
document.getElementById("quant_1").value = localStorage.quant_1;
document.getElementById("valor_1").value = localStorage.valor_1;
document.getElementById("consumo_2").value = localStorage.consumo_2;
document.getElementById("quant_2").value = localStorage.quant_2;
document.getElementById("valor_2").value = localStorage.valor_2;
document.getElementById("consumo_3").value = localStorage.consumo_3;
document.getElementById("quant_3").value = localStorage.quant_3;
document.getElementById("valor_3").value = localStorage.valor_3;
document.getElementById("consumo_4").value = localStorage.consumo_4;
document.getElementById("quant_4").value = localStorage.quant_4;
document.getElementById("valor_4").value = localStorage.valor_4;
document.getElementById("consumo_5").value = localStorage.consumo_5;
document.getElementById("quant_5").value = localStorage.quant_5;
document.getElementById("valor_5").value = localStorage.valor_5;
document.getElementById("consumo_6").value = localStorage.consumo_6;
document.getElementById("quant_6").value = localStorage.quant_6;
document.getElementById("valor_6").value = localStorage.valor_6;
document.getElementById("consumo_7").value = localStorage.consumo_7;
document.getElementById("quant_7").value = localStorage.quant_7;
document.getElementById("valor_7").value = localStorage.valor_7;
document.getElementById("vt").value = localStorage.vt;
document.getElementById("obs").value = localStorage.obs;
}
}