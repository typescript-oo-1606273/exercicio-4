import { Calculadora } from "./Calculadora";
import { DivisaoPorZero } from "./DivisaoPorZero";

const calculadora = new Calculadora();

try {
  console.log(calculadora.somar(5, 7)); //12
  console.log(calculadora.subtrair(18, 7)); //11
  console.log(calculadora.multiplicar(5, 5)); //25
  console.log(calculadora.dividir(12, 2)); //6
  console.log(calculadora.dividir(3, 0)); //Deve mostrar mensagem de erro
} catch (error) {
  if(error instanceof DivisaoPorZero) {
    console.log(error.message);
  }
}