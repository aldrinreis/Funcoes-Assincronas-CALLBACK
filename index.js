const prompt = require("prompt-sync")();

// FUNÇÃO ASSINCRONA QUE NAO BLOQUEIA AS OUTRAS LINHAS

setTimeout(() => {
  console.log("Esperei 1,5 segundos");
}, 1500);

console.log("oi");

// CALLBACk

function obterNome(callback) {
  var nome = prompt("Insira seu nome: ");
  callback(nome);
}

obterNome((nome) => {
  console.log(nome);
});

function cadastrarUsuario(callback) {
  setTimeout(() => {
    //callback(new Error("Erro no cadastro"));
    callback();
  }, 2000);
}

cadastrarUsuario((erro) => {
  if (erro) {
    return console.log("Ocorreu um erro: " + erro.message);
  }
  console.log("Usuário cadastrado com sucesso");
});

function baixarConteudo(nomeConteudo, callback) {
  console.log(`Iniciando o download do conteúdo ${nomeConteudo}...`);
  //Simula o Tempo de Download (em milissegundos)
  setTimeout(function () {
    console.log(`${nomeConteudo} foi baixado com sucesso.`);
    callback(null, nomeConteudo); //indica que o download foi concluido com sucesso
  }, 2000); // Simula 2 segundos de download
}

// VAMOS CRIAR UMA FUNÇÃO CALLBACK SIMPLES QUE SERÁ CHAMADA APÓS O DOWNLOAD.

function callbackConcluirDownload(erro, nomeConteudo) {
  if (erro) {
    return console.log(`Erro ao baixar ${nomeConteudo}: ${erro.message}`);
  } else {
    console.log(`Download de ${nomeConteudo} concluído com sucesso.`);
  }
}

// Agora vamos usar a função baixar conteúdo com callback.

baixarConteudo("Documento.pdf", callbackConcluirDownload);
baixarConteudo("Imagem.jpg", callbackConcluirDownload);
baixarConteudo("Video.mp4", callbackConcluirDownload);
