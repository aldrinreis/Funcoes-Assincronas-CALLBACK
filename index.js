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
