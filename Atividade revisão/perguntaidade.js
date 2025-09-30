// Importa o módulo readline para ler entrada do usuário no terminal
const readline = require('readline');

// Cria a interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faz a pergunta
rl.question('Qual é a sua idade? ', (input) => {
  const idade = Number(input);

  if (isNaN(idade)) {10
    console.log('Por favor, digite um número válido.');
  } else if (idade >= 18) {
    console.log('Você é maior de idade.');
  } else {
    console.log('Você é menor de idade.');
  }

  rl.close();

});
