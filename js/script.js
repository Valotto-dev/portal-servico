// Aula 09 - Arrays e objetos
// ARRAY = lista [ ] ; OBJETO = um serviço { } com as propriedades nome e descricao
const servicos = [
  {
    nome: "O que é inteligência artificial",
    descricao: "Entenda em linguagem simples como a IA aprende com exemplos e o que ela consegue fazer."
  },
  {
    nome: "Como escrever bons prompts",
    descricao: "Aprenda a pedir o que precisa com contexto, objetivo e formato da resposta."
  },
  {
    nome: "Uso seguro e responsável",
    descricao: "Saiba proteger seus dados e conferir as informações antes de confiar na resposta."
  }
];

// Teste dos dados no Console (F12). Pode apagar depois de conferir.
console.table(servicos);
console.log(servicos[0].nome);      // primeiro serviço: índice 0
console.log(servicos[1].descricao); // descrição do segundo serviço

// forEach = "para cada serviço da lista, execute o bloco"
servicos.forEach((servico) => {
  console.log(servico.nome);
});

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

// Aula 10 - Funções + DOM: dados viram cards
// Container vazio do HTML (id="listaServicos")
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos() {
  // Limpa o container para não duplicar cards se a função rodar de novo
  listaServicos.innerHTML = "";

  // Para cada serviço do array, cria um card
  servicos.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

renderizarServicos();
