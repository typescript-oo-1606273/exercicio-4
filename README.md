# Exercício: Sistema de Calculadora

**Objetivo**: Criar um sistema simples de calculadora que realize operações básicas como soma, subtração, multiplicação e divisão usando uma classe.

## Instruções:

- Crie um novo projeto Typescript ou utilize o modelo que criamos nas aulas [exemplo-typescript-config](https://github.com/typescript-oo-1606273/projeto-typescript) 

1. **Criar a Classe**:
   - Crie uma classe chamada `Calculadora`.

2. **Adicionar Métodos**:
   - Dentro da classe, crie os seguintes métodos:
     - **Soma**: Um método que aceita dois números e retorna a soma deles.
     - **Subtração**: Um método que aceita dois números e retorna a subtração do primeiro pelo segundo.
     - **Multiplicação**: Um método que aceita dois números e retorna o produto deles.
     - **Divisão**: Um método que aceita dois números e retorna a divisão do primeiro pelo segundo.
       - OBS: você deve impedir que seja feita uma divisão de um número por zero

3. **Instanciar a Classe**:
   - No seu arquivo principal, crie uma instância da classe `Calculadora`.

4. **Testar as Operações**:
   - Instancie as classe e faça as seguintes operações:
   ```typescript
   const calculadora = new Calculadora();

   console.log(calculadora.somar(5, 7)); //12
   console.log(calculadora.subtrair(18, 7)); //11
   console.log(calculadora.multiplicar(5, 5)); //25
   console.log(calculadora.dividir(12, 2)); //6
   console.log(calculadora.dividir(3, 0)); //Deve mostrar mensagem de erro
   ```

5. **Indo além**:

Separe cada uma das operações em classes isoladas, implementando a seguinte interface:

```typescript
interface OperacaoMatematica {
   calcular(num1: number, num2: number): number
}
```

Instancie as classes das operações ao chamar a classe Calculadora
