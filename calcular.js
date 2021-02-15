function conversor(event){
  
  let mlMedicacao = document.querySelector(".medicacaoMl"); // pega o primeiro input
  let mgMedicacao = document.querySelector(".medicacaoMg");
  let mgPrescricao = document.querySelector(".prescricaoMg");

  let calculo =  (mlMedicacao.value * mgPrescricao.value)/ (mgMedicacao.value); // pega o valor do input e faz o calculo.

  // insere o resultado dentro do html.
  document.getElementById("mostrarResultado").innerHTML = `Será necessário ${calculo} ml da medicação.`;

  // limpa os valores dos inputs.
  mlMedicacao.value = "";
  mgMedicacao.value ="";
  mgPrescricao.value = "";

  // da foco no primeiro input.
  mlMedicacao.focus();
  
}

