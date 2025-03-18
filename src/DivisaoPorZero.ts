export class DivisaoPorZero extends Error {
  constructor() {
    super("Erro de divisão por zero");
  }
}