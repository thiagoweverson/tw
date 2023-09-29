function salvar8(){
localStorage.cliente_q_8 = document.getElementById("cliente_q_8").value;
localStorage.hora_entrada_q_8 = document.getElementById("hora_entrada_q_8").value;
localStorage.hora_saida_q_8 = document.getElementById("hora_saida_q_8").value;
localStorage.q_h_q_8 = document.getElementById("q_h_q_8").value;
localStorage.valor_h_q_8 = document.getElementById("valor_h_q_8").value;
localStorage.consumo_q_8_1 = document.getElementById("consumo_q_8_1").value;
localStorage.quant_q_8_1 = document.getElementById("quant_q_8_1").value;
localStorage.valor_q_8_1 = document.getElementById("valor_q_8_1").value;
localStorage.consumo_q_8_2 = document.getElementById("consumo_q_8_2").value;
localStorage.quant_q_8_2 = document.getElementById("quant_q_8_2").value;
localStorage.valor_q_8_2 = document.getElementById("valor_q_8_2").value;
localStorage.consumo_q_8_3 = document.getElementById("consumo_q_8_3").value;
localStorage.quant_q_8_3 = document.getElementById("quant_q_8_3").value;
localStorage.valor_q_8_3 = document.getElementById("valor_q_8_3").value;
localStorage.consumo_q_8_4 = document.getElementById("consumo_q_8_4").value;
localStorage.quant_q_8_4 = document.getElementById("quant_q_8_4").value;
localStorage.valor_q_8_4 = document.getElementById("valor_q_8_4").value;
localStorage.consumo_q_8_5 = document.getElementById("consumo_q_8_5").value;
localStorage.quant_q_8_5 = document.getElementById("quant_q_8_5").value;
localStorage.valor_q_8_5 = document.getElementById("valor_q_8_5").value;
localStorage.consumo_q_8_6 = document.getElementById("consumo_q_8_6").value;
localStorage.quant_q_8_6 = document.getElementById("quant_q_8_6").value;
localStorage.valor_q_8_6 = document.getElementById("valor_q_8_6").value;
localStorage.consumo_q_8_7 = document.getElementById("consumo_q_8_7").value;
localStorage.quant_q_8_7 = document.getElementById("quant_q_8_7").value;
localStorage.valor_q_8_7 = document.getElementById("valor_q_8_7").value;
localStorage.vt_q_8 = document.getElementById("vt_q_8").value;
localStorage.obs_q_8 = document.getElementById("obs_q_8").value;
localStorage.consumo_q_8_1 = document.getElementById("consumo_q_8_1").value;
}



function carregar8(){
if (localStorage.cliente_q_8){
document.getElementById("cliente_q_8").value = localStorage.cliente_q_8;
document.getElementById("hora_entrada_q_8").value = localStorage.hora_entrada_q_8;
document.getElementById("hora_saida_q_8").value = localStorage.hora_saida_q_8;
document.getElementById("q_h_q_8").value = localStorage.q_h_q_8;
document.getElementById("valor_h_q_8").value = localStorage.valor_h_q_8;
document.getElementById("consumo_q_8_1").value = localStorage.consumo_q_8_1;
document.getElementById("quant_q_8_1").value = localStorage.quant_q_8_1;
document.getElementById("valor_q_8_1").value = localStorage.valor_q_8_1;
document.getElementById("consumo_q_8_2").value = localStorage.consumo_q_8_2;
document.getElementById("quant_q_8_2").value = localStorage.quant_q_8_2;
document.getElementById("valor_q_8_2").value = localStorage.valor_q_8_2;
document.getElementById("consumo_q_8_3").value = localStorage.consumo_q_8_3;
document.getElementById("quant_q_8_3").value = localStorage.quant_q_8_3;
document.getElementById("valor_q_8_3").value = localStorage.valor_q_8_3;
document.getElementById("consumo_q_8_4").value = localStorage.consumo_q_8_4;
document.getElementById("quant_q_8_4").value = localStorage.quant_q_8_4;
document.getElementById("valor_q_8_4").value = localStorage.valor_q_8_4;
document.getElementById("consumo_q_8_5").value = localStorage.consumo_q_8_5;
document.getElementById("quant_q_8_5").value = localStorage.quant_q_8_5;
document.getElementById("valor_q_8_5").value = localStorage.valor_q_8_5;
document.getElementById("consumo_q_8_6").value = localStorage.consumo_q_8_6;
document.getElementById("quant_q_8_6").value = localStorage.quant_q_8_6;
document.getElementById("valor_q_8_6").value = localStorage.valor_q_8_6;
document.getElementById("consumo_q_8_7").value = localStorage.consumo_q_8_7;
document.getElementById("quant_q_8_7").value = localStorage.quant_q_8_7;
document.getElementById("valor_q_8_7").value = localStorage.valor_q_8_7;
document.getElementById("vt_q_8").value = localStorage.vt_q_8;
document.getElementById("obs_q_8").value = localStorage.obs_q_8;
}
}