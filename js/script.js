// Aula 08 - O Portal toma decisões
// 1) Encontrar os elementos no DOM (mesmos ids do HTML)
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// 2) Escutar o clique, ler a escolha e decidir a resposta
botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "o-que-e-ia") {
    resultado.textContent = "A inteligência artificial aprende padrões a partir de muitos exemplos. Ela ajuda a gerar textos, imagens e respostas, mas não entende o mundo como uma pessoa.";
  } else if (escolha === "prompts") {
    resultado.textContent = "Um bom prompt diz quem você é, o que precisa, para quê e em qual formato quer a resposta. Se o resultado não ajudar, refine o pedido com mais detalhes.";
  } else if (escolha === "seguranca") {
    resultado.textContent = "Não compartilhe senhas nem dados pessoais com a IA e sempre confira as informações importantes em fontes confiáveis antes de usar.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});
