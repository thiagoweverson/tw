function salvar12(){
localStorage.cliente_q_12 = document.getElementById("cliente_q_12").value;
localStorage.hora_entrada_q_12 = document.getElementById("hora_entrada_q_12").value;
localStorage.hora_saida_q_12 = document.getElementById("hora_saida_q_12").value;
localStorage.q_h_q_12 = document.getElementById("q_h_q_12").value;
localStorage.valor_h_q_12 = document.getElementById("valor_h_q_12").value;
localStorage.consumo_q_12_1 = document.getElementById("consumo_q_12_1").value;
localStorage.quant_q_12_1 = document.getElementById("quant_q_12_1").value;
localStorage.valor_q_12_1 = document.getElementById("valor_q_12_1").value;
localStorage.consumo_q_12_2 = document.getElementById("consumo_q_12_2").value;
localStorage.quant_q_12_2 = document.getElementById("quant_q_12_2").value;
localStorage.valor_q_12_2 = document.getElementById("valor_q_12_2").value;
localStorage.consumo_q_12_3 = document.getElementById("consumo_q_12_3").value;
localStorage.quant_q_12_3 = document.getElementById("quant_q_12_3").value;
localStorage.valor_q_12_3 = document.getElementById("valor_q_12_3").value;
localStorage.consumo_q_12_4 = document.getElementById("consumo_q_12_4").value;
localStorage.quant_q_12_4 = document.getElementById("quant_q_12_4").value;
localStorage.valor_q_12_4 = document.getElementById("valor_q_12_4").value;
localStorage.consumo_q_12_5 = document.getElementById("consumo_q_12_5").value;
localStorage.quant_q_12_5 = document.getElementById("quant_q_12_5").value;
localStorage.valor_q_12_5 = document.getElementById("valor_q_12_5").value;
localStorage.consumo_q_12_6 = document.getElementById("consumo_q_12_6").value;
localStorage.quant_q_12_6 = document.getElementById("quant_q_12_6").value;
localStorage.valor_q_12_6 = document.getElementById("valor_q_12_6").value;
localStorage.consumo_q_12_7 = document.getElementById("consumo_q_12_7").value;
localStorage.quant_q_12_7 = document.getElementById("quant_q_12_7").value;
localStorage.valor_q_12_7 = document.getElementById("valor_q_12_7").value;
localStorage.vt_q_12 = document.getElementById("vt_q_12").value;
localStorage.obs_q_12 = document.getElementById("obs_q_12").value;
localStorage.consumo_q_12_1 = document.getElementById("consumo_q_12_1").value;
}



function carregar12(){
if (localStorage.cliente_q_12){
document.getElementById("cliente_q_12").value = localStorage.cliente_q_12;
document.getElementById("hora_entrada_q_12").value = localStorage.hora_entrada_q_12;
document.getElementById("hora_saida_q_12").value = localStorage.hora_saida_q_12;
document.getElementById("q_h_q_12").value = localStorage.q_h_q_12;
document.getElementById("valor_h_q_12").value = localStorage.valor_h_q_12;
document.getElementById("consumo_q_12_1").value = localStorage.consumo_q_12_1;
document.getElementById("quant_q_12_1").value = localStorage.quant_q_12_1;
document.getElementById("valor_q_12_1").value = localStorage.valor_q_12_1;
document.getElementById("consumo_q_12_2").value = localStorage.consumo_q_12_2;
document.getElementById("quant_q_12_2").value = localStorage.quant_q_12_2;
document.getElementById("valor_q_12_2").value = localStorage.valor_q_12_2;
document.getElementById("consumo_q_12_3").value = localStorage.consumo_q_12_3;
document.getElementById("quant_q_12_3").value = localStorage.quant_q_12_3;
document.getElementById("valor_q_12_3").value = localStorage.valor_q_12_3;
document.getElementById("consumo_q_12_4").value = localStorage.consumo_q_12_4;
document.getElementById("quant_q_12_4").value = localStorage.quant_q_12_4;
document.getElementById("valor_q_12_4").value = localStorage.valor_q_12_4;
document.getElementById("consumo_q_12_5").value = localStorage.consumo_q_12_5;
document.getElementById("quant_q_12_5").value = localStorage.quant_q_12_5;
document.getElementById("valor_q_12_5").value = localStorage.valor_q_12_5;
document.getElementById("consumo_q_12_6").value = localStorage.consumo_q_12_6;
document.getElementById("quant_q_12_6").value = localStorage.quant_q_12_6;
document.getElementById("valor_q_12_6").value = localStorage.valor_q_12_6;
document.getElementById("consumo_q_12_7").value = localStorage.consumo_q_12_7;
document.getElementById("quant_q_12_7").value = localStorage.quant_q_12_7;
document.getElementById("valor_q_12_7").value = localStorage.valor_q_12_7;
document.getElementById("vt_q_12").value = localStorage.vt_q_12;
document.getElementById("obs_q_12").value = localStorage.obs_q_12;
}
}