import { DivisaoPorZero } from "./DivisaoPorZero";

export class Calculadora {
  somar(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtrair(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    if(num2 === 0) {
      throw new DivisaoPorZero();
    }

    return num1 / num2;
  }
}