function salvar5(){
localStorage.cliente_q_5 = document.getElementById("cliente_q_5").value;
localStorage.hora_entrada_q_5 = document.getElementById("hora_entrada_q_5").value;
localStorage.hora_saida_q_5 = document.getElementById("hora_saida_q_5").value;
localStorage.q_h_q_5 = document.getElementById("q_h_q_5").value;
localStorage.valor_h_q_5 = document.getElementById("valor_h_q_5").value;
localStorage.consumo_q_5_1 = document.getElementById("consumo_q_5_1").value;
localStorage.quant_q_5_1 = document.getElementById("quant_q_5_1").value;
localStorage.valor_q_5_1 = document.getElementById("valor_q_5_1").value;
localStorage.consumo_q_5_2 = document.getElementById("consumo_q_5_2").value;
localStorage.quant_q_5_2 = document.getElementById("quant_q_5_2").value;
localStorage.valor_q_5_2 = document.getElementById("valor_q_5_2").value;
localStorage.consumo_q_5_3 = document.getElementById("consumo_q_5_3").value;
localStorage.quant_q_5_3 = document.getElementById("quant_q_5_3").value;
localStorage.valor_q_5_3 = document.getElementById("valor_q_5_3").value;
localStorage.consumo_q_5_4 = document.getElementById("consumo_q_5_4").value;
localStorage.quant_q_5_4 = document.getElementById("quant_q_5_4").value;
localStorage.valor_q_5_4 = document.getElementById("valor_q_5_4").value;
localStorage.consumo_q_5_5 = document.getElementById("consumo_q_5_5").value;
localStorage.quant_q_5_5 = document.getElementById("quant_q_5_5").value;
localStorage.valor_q_5_5 = document.getElementById("valor_q_5_5").value;
localStorage.consumo_q_5_6 = document.getElementById("consumo_q_5_6").value;
localStorage.quant_q_5_6 = document.getElementById("quant_q_5_6").value;
localStorage.valor_q_5_6 = document.getElementById("valor_q_5_6").value;
localStorage.consumo_q_5_7 = document.getElementById("consumo_q_5_7").value;
localStorage.quant_q_5_7 = document.getElementById("quant_q_5_7").value;
localStorage.valor_q_5_7 = document.getElementById("valor_q_5_7").value;
localStorage.vt_q_5 = document.getElementById("vt_q_5").value;
localStorage.obs_q_5 = document.getElementById("obs_q_5").value;
localStorage.consumo_q_5_1 = document.getElementById("consumo_q_5_1").value;
}



function carregar5(){
if (localStorage.cliente_q_5){
document.getElementById("cliente_q_5").value = localStorage.cliente_q_5;
document.getElementById("hora_entrada_q_5").value = localStorage.hora_entrada_q_5;
document.getElementById("hora_saida_q_5").value = localStorage.hora_saida_q_5;
document.getElementById("q_h_q_5").value = localStorage.q_h_q_5;
document.getElementById("valor_h_q_5").value = localStorage.valor_h_q_5;
document.getElementById("consumo_q_5_1").value = localStorage.consumo_q_5_1;
document.getElementById("quant_q_5_1").value = localStorage.quant_q_5_1;
document.getElementById("valor_q_5_1").value = localStorage.valor_q_5_1;
document.getElementById("consumo_q_5_2").value = localStorage.consumo_q_5_2;
document.getElementById("quant_q_5_2").value = localStorage.quant_q_5_2;
document.getElementById("valor_q_5_2").value = localStorage.valor_q_5_2;
document.getElementById("consumo_q_5_3").value = localStorage.consumo_q_5_3;
document.getElementById("quant_q_5_3").value = localStorage.quant_q_5_3;
document.getElementById("valor_q_5_3").value = localStorage.valor_q_5_3;
document.getElementById("consumo_q_5_4").value = localStorage.consumo_q_5_4;
document.getElementById("quant_q_5_4").value = localStorage.quant_q_5_4;
document.getElementById("valor_q_5_4").value = localStorage.valor_q_5_4;
document.getElementById("consumo_q_5_5").value = localStorage.consumo_q_5_5;
document.getElementById("quant_q_5_5").value = localStorage.quant_q_5_5;
document.getElementById("valor_q_5_5").value = localStorage.valor_q_5_5;
document.getElementById("consumo_q_5_6").value = localStorage.consumo_q_5_6;
document.getElementById("quant_q_5_6").value = localStorage.quant_q_5_6;
document.getElementById("valor_q_5_6").value = localStorage.valor_q_5_6;
document.getElementById("consumo_q_5_7").value = localStorage.consumo_q_5_7;
document.getElementById("quant_q_5_7").value = localStorage.quant_q_5_7;
document.getElementById("valor_q_5_7").value = localStorage.valor_q_5_7;
document.getElementById("vt_q_5").value = localStorage.vt_q_5;
document.getElementById("obs_q_5").value = localStorage.obs_q_5;
}
}