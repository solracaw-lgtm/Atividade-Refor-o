function fatorial(n) {
  if (n < 0) return "Não existe fatorial de número negativo";
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Testes
console.log(fatorial(5));   // 120
console.log(fatorial(0));   // 1
console.log(fatorial(1));   // 1
