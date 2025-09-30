function contarVogais(palavra) {
  const vogais = 'aeiouáéíóúâêîôûãõ';
  let contador = 0;

  for (let letra of palavra.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Testes
console.log(contarVogais("ChatGPT"));        // 1
console.log(contarVogais("Inteligência"));   // 6
console.log(contarVogais("Javascript"));     // 3
