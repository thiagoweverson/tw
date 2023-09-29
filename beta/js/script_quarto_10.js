function salvar10(){
localStorage.cliente_q_10 = document.getElementById("cliente_q_10").value;
localStorage.hora_entrada_q_10 = document.getElementById("hora_entrada_q_10").value;
localStorage.hora_saida_q_10 = document.getElementById("hora_saida_q_10").value;
localStorage.q_h_q_10 = document.getElementById("q_h_q_10").value;
localStorage.valor_h_q_10 = document.getElementById("valor_h_q_10").value;
localStorage.consumo_q_10_1 = document.getElementById("consumo_q_10_1").value;
localStorage.quant_q_10_1 = document.getElementById("quant_q_10_1").value;
localStorage.valor_q_10_1 = document.getElementById("valor_q_10_1").value;
localStorage.consumo_q_10_2 = document.getElementById("consumo_q_10_2").value;
localStorage.quant_q_10_2 = document.getElementById("quant_q_10_2").value;
localStorage.valor_q_10_2 = document.getElementById("valor_q_10_2").value;
localStorage.consumo_q_10_3 = document.getElementById("consumo_q_10_3").value;
localStorage.quant_q_10_3 = document.getElementById("quant_q_10_3").value;
localStorage.valor_q_10_3 = document.getElementById("valor_q_10_3").value;
localStorage.consumo_q_10_4 = document.getElementById("consumo_q_10_4").value;
localStorage.quant_q_10_4 = document.getElementById("quant_q_10_4").value;
localStorage.valor_q_10_4 = document.getElementById("valor_q_10_4").value;
localStorage.consumo_q_10_5 = document.getElementById("consumo_q_10_5").value;
localStorage.quant_q_10_5 = document.getElementById("quant_q_10_5").value;
localStorage.valor_q_10_5 = document.getElementById("valor_q_10_5").value;
localStorage.consumo_q_10_6 = document.getElementById("consumo_q_10_6").value;
localStorage.quant_q_10_6 = document.getElementById("quant_q_10_6").value;
localStorage.valor_q_10_6 = document.getElementById("valor_q_10_6").value;
localStorage.consumo_q_10_7 = document.getElementById("consumo_q_10_7").value;
localStorage.quant_q_10_7 = document.getElementById("quant_q_10_7").value;
localStorage.valor_q_10_7 = document.getElementById("valor_q_10_7").value;
localStorage.vt_q_10 = document.getElementById("vt_q_10").value;
localStorage.obs_q_10 = document.getElementById("obs_q_10").value;
localStorage.consumo_q_10_1 = document.getElementById("consumo_q_10_1").value;
}



function carregar10(){
if (localStorage.cliente_q_10){
document.getElementById("cliente_q_10").value = localStorage.cliente_q_10;
document.getElementById("hora_entrada_q_10").value = localStorage.hora_entrada_q_10;
document.getElementById("hora_saida_q_10").value = localStorage.hora_saida_q_10;
document.getElementById("q_h_q_10").value = localStorage.q_h_q_10;
document.getElementById("valor_h_q_10").value = localStorage.valor_h_q_10;
document.getElementById("consumo_q_10_1").value = localStorage.consumo_q_10_1;
document.getElementById("quant_q_10_1").value = localStorage.quant_q_10_1;
document.getElementById("valor_q_10_1").value = localStorage.valor_q_10_1;
document.getElementById("consumo_q_10_2").value = localStorage.consumo_q_10_2;
document.getElementById("quant_q_10_2").value = localStorage.quant_q_10_2;
document.getElementById("valor_q_10_2").value = localStorage.valor_q_10_2;
document.getElementById("consumo_q_10_3").value = localStorage.consumo_q_10_3;
document.getElementById("quant_q_10_3").value = localStorage.quant_q_10_3;
document.getElementById("valor_q_10_3").value = localStorage.valor_q_10_3;
document.getElementById("consumo_q_10_4").value = localStorage.consumo_q_10_4;
document.getElementById("quant_q_10_4").value = localStorage.quant_q_10_4;
document.getElementById("valor_q_10_4").value = localStorage.valor_q_10_4;
document.getElementById("consumo_q_10_5").value = localStorage.consumo_q_10_5;
document.getElementById("quant_q_10_5").value = localStorage.quant_q_10_5;
document.getElementById("valor_q_10_5").value = localStorage.valor_q_10_5;
document.getElementById("consumo_q_10_6").value = localStorage.consumo_q_10_6;
document.getElementById("quant_q_10_6").value = localStorage.quant_q_10_6;
document.getElementById("valor_q_10_6").value = localStorage.valor_q_10_6;
document.getElementById("consumo_q_10_7").value = localStorage.consumo_q_10_7;
document.getElementById("quant_q_10_7").value = localStorage.quant_q_10_7;
document.getElementById("valor_q_10_7").value = localStorage.valor_q_10_7;
document.getElementById("vt_q_10").value = localStorage.vt_q_10;
document.getElementById("obs_q_10").value = localStorage.obs_q_10;
}
}