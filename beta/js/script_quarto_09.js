function salvar9(){
localStorage.cliente_q_9 = document.getElementById("cliente_q_9").value;
localStorage.hora_entrada_q_9 = document.getElementById("hora_entrada_q_9").value;
localStorage.hora_saida_q_9 = document.getElementById("hora_saida_q_9").value;
localStorage.q_h_q_9 = document.getElementById("q_h_q_9").value;
localStorage.valor_h_q_9 = document.getElementById("valor_h_q_9").value;
localStorage.consumo_q_9_1 = document.getElementById("consumo_q_9_1").value;
localStorage.quant_q_9_1 = document.getElementById("quant_q_9_1").value;
localStorage.valor_q_9_1 = document.getElementById("valor_q_9_1").value;
localStorage.consumo_q_9_2 = document.getElementById("consumo_q_9_2").value;
localStorage.quant_q_9_2 = document.getElementById("quant_q_9_2").value;
localStorage.valor_q_9_2 = document.getElementById("valor_q_9_2").value;
localStorage.consumo_q_9_3 = document.getElementById("consumo_q_9_3").value;
localStorage.quant_q_9_3 = document.getElementById("quant_q_9_3").value;
localStorage.valor_q_9_3 = document.getElementById("valor_q_9_3").value;
localStorage.consumo_q_9_4 = document.getElementById("consumo_q_9_4").value;
localStorage.quant_q_9_4 = document.getElementById("quant_q_9_4").value;
localStorage.valor_q_9_4 = document.getElementById("valor_q_9_4").value;
localStorage.consumo_q_9_5 = document.getElementById("consumo_q_9_5").value;
localStorage.quant_q_9_5 = document.getElementById("quant_q_9_5").value;
localStorage.valor_q_9_5 = document.getElementById("valor_q_9_5").value;
localStorage.consumo_q_9_6 = document.getElementById("consumo_q_9_6").value;
localStorage.quant_q_9_6 = document.getElementById("quant_q_9_6").value;
localStorage.valor_q_9_6 = document.getElementById("valor_q_9_6").value;
localStorage.consumo_q_9_7 = document.getElementById("consumo_q_9_7").value;
localStorage.quant_q_9_7 = document.getElementById("quant_q_9_7").value;
localStorage.valor_q_9_7 = document.getElementById("valor_q_9_7").value;
localStorage.vt_q_9 = document.getElementById("vt_q_9").value;
localStorage.obs_q_9 = document.getElementById("obs_q_9").value;
localStorage.consumo_q_9_1 = document.getElementById("consumo_q_9_1").value;
}



function carregar9(){
if (localStorage.cliente_q_9){
document.getElementById("cliente_q_9").value = localStorage.cliente_q_9;
document.getElementById("hora_entrada_q_9").value = localStorage.hora_entrada_q_9;
document.getElementById("hora_saida_q_9").value = localStorage.hora_saida_q_9;
document.getElementById("q_h_q_9").value = localStorage.q_h_q_9;
document.getElementById("valor_h_q_9").value = localStorage.valor_h_q_9;
document.getElementById("consumo_q_9_1").value = localStorage.consumo_q_9_1;
document.getElementById("quant_q_9_1").value = localStorage.quant_q_9_1;
document.getElementById("valor_q_9_1").value = localStorage.valor_q_9_1;
document.getElementById("consumo_q_9_2").value = localStorage.consumo_q_9_2;
document.getElementById("quant_q_9_2").value = localStorage.quant_q_9_2;
document.getElementById("valor_q_9_2").value = localStorage.valor_q_9_2;
document.getElementById("consumo_q_9_3").value = localStorage.consumo_q_9_3;
document.getElementById("quant_q_9_3").value = localStorage.quant_q_9_3;
document.getElementById("valor_q_9_3").value = localStorage.valor_q_9_3;
document.getElementById("consumo_q_9_4").value = localStorage.consumo_q_9_4;
document.getElementById("quant_q_9_4").value = localStorage.quant_q_9_4;
document.getElementById("valor_q_9_4").value = localStorage.valor_q_9_4;
document.getElementById("consumo_q_9_5").value = localStorage.consumo_q_9_5;
document.getElementById("quant_q_9_5").value = localStorage.quant_q_9_5;
document.getElementById("valor_q_9_5").value = localStorage.valor_q_9_5;
document.getElementById("consumo_q_9_6").value = localStorage.consumo_q_9_6;
document.getElementById("quant_q_9_6").value = localStorage.quant_q_9_6;
document.getElementById("valor_q_9_6").value = localStorage.valor_q_9_6;
document.getElementById("consumo_q_9_7").value = localStorage.consumo_q_9_7;
document.getElementById("quant_q_9_7").value = localStorage.quant_q_9_7;
document.getElementById("valor_q_9_7").value = localStorage.valor_q_9_7;
document.getElementById("vt_q_9").value = localStorage.vt_q_9;
document.getElementById("obs_q_9").value = localStorage.obs_q_9;
}
}