function salvar2(){
localStorage.cliente_q_02 = document.getElementById("cliente_q_02").value;
localStorage.hora_entrada_q_2 = document.getElementById("hora_entrada_q_2").value;
localStorage.hora_saida_q_2 = document.getElementById("hora_saida_q_2").value;
localStorage.q_h_q_2 = document.getElementById("q_h_q_2").value;
localStorage.valor_h_q_2 = document.getElementById("valor_h_q_2").value;
localStorage.consumo_q_2_1 = document.getElementById("consumo_q_2_1").value;
localStorage.quant_q_2_1 = document.getElementById("quant_q_2_1").value;
localStorage.valor_q_2_1 = document.getElementById("valor_q_2_1").value;
localStorage.consumo_q_2_2 = document.getElementById("consumo_q_2_2").value;
localStorage.quant_q_2_2 = document.getElementById("quant_q_2_2").value;
localStorage.valor_q_2_2 = document.getElementById("valor_q_2_2").value;
localStorage.consumo_q_2_3 = document.getElementById("consumo_q_2_3").value;
localStorage.quant_q_2_3 = document.getElementById("quant_q_2_3").value;
localStorage.valor_q_2_3 = document.getElementById("valor_q_2_3").value;
localStorage.consumo_q_2_4 = document.getElementById("consumo_q_2_4").value;
localStorage.quant_q_2_4 = document.getElementById("quant_q_2_4").value;
localStorage.valor_q_2_4 = document.getElementById("valor_q_2_4").value;
localStorage.consumo_q_2_5 = document.getElementById("consumo_q_2_5").value;
localStorage.quant_q_2_5 = document.getElementById("quant_q_2_5").value;
localStorage.valor_q_2_5 = document.getElementById("valor_q_2_5").value;
localStorage.consumo_q_2_6 = document.getElementById("consumo_q_2_6").value;
localStorage.quant_q_2_6 = document.getElementById("quant_q_2_6").value;
localStorage.valor_q_2_6 = document.getElementById("valor_q_2_6").value;
localStorage.consumo_q_2_7 = document.getElementById("consumo_q_2_7").value;
localStorage.quant_q_2_7 = document.getElementById("quant_q_2_7").value;
localStorage.valor_q_2_7 = document.getElementById("valor_q_2_7").value;
localStorage.vt_q_2 = document.getElementById("vt_q_2").value;
localStorage.obs_q_2 = document.getElementById("obs_q_2").value;
localStorage.consumo_q_2_1 = document.getElementById("consumo_q_2_1").value;
}



function carregar2(){
if (localStorage.cliente_q_02){
document.getElementById("cliente_q_02").value = localStorage.cliente_q_02;
document.getElementById("hora_entrada_q_2").value = localStorage.hora_entrada_q_2;
document.getElementById("hora_saida_q_2").value = localStorage.hora_saida_q_2;
document.getElementById("q_h_q_2").value = localStorage.q_h_q_2;
document.getElementById("valor_h_q_2").value = localStorage.valor_h_q_2;
document.getElementById("consumo_q_2_1").value = localStorage.consumo_q_2_1;
document.getElementById("quant_q_2_1").value = localStorage.quant_q_2_1;
document.getElementById("valor_q_2_1").value = localStorage.valor_q_2_1;
document.getElementById("consumo_q_2_2").value = localStorage.consumo_q_2_2;
document.getElementById("quant_q_2_2").value = localStorage.quant_q_2_2;
document.getElementById("valor_q_2_2").value = localStorage.valor_q_2_2;
document.getElementById("consumo_q_2_3").value = localStorage.consumo_q_2_3;
document.getElementById("quant_q_2_3").value = localStorage.quant_q_2_3;
document.getElementById("valor_q_2_3").value = localStorage.valor_q_2_3;
document.getElementById("consumo_q_2_4").value = localStorage.consumo_q_2_4;
document.getElementById("quant_q_2_4").value = localStorage.quant_q_2_4;
document.getElementById("valor_q_2_4").value = localStorage.valor_q_2_4;
document.getElementById("consumo_q_2_5").value = localStorage.consumo_q_2_5;
document.getElementById("quant_q_2_5").value = localStorage.quant_q_2_5;
document.getElementById("valor_q_2_5").value = localStorage.valor_q_2_5;
document.getElementById("consumo_q_2_6").value = localStorage.consumo_q_2_6;
document.getElementById("quant_q_2_6").value = localStorage.quant_q_2_6;
document.getElementById("valor_q_2_6").value = localStorage.valor_q_2_6;
document.getElementById("consumo_q_2_7").value = localStorage.consumo_q_2_7;
document.getElementById("quant_q_2_7").value = localStorage.quant_q_2_7;
document.getElementById("valor_q_2_7").value = localStorage.valor_q_2_7;
document.getElementById("vt_q_2").value = localStorage.vt_q_2;
document.getElementById("obs_q_2").value = localStorage.obs_q_2;
}
}