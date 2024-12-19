/* Switch case

O switch case é como um "menu de escolhas" em uma programação. Ele é usado para tomar decisões baseadas no valor de uma variável ou expressão.

Em vez de usar vários if...else, o switch case organiza as condições de forma mais clara e direta. Funciona assim:

1 - A variável ou expressão é analisada.
2 - Para cada valor possível (os "cases"), há uma ação definida.
3 - Se nenhum valor corresponder, pode haver uma opção padrão (o default) para tratar outros casos.
Ele é útil quando você tem várias opções bem definidas e quer deixar o código mais organizado e fácil de entender.


Diferenças:
A diferença entre switch case e if else está na forma como as decisões são estruturadas e no tipo de situações em que cada um é mais útil:

1. Estrutura e Legibilidade
If Else:
É mais flexível, permitindo comparar diferentes condições (valores, intervalos, expressões lógicas).
Fica difícil de ler se houver muitas condições, especialmente em cadeia.
Exemplo de uso: verificar intervalos (idade > 18 ou idade < 60).
Switch Case:
É mais organizado e direto quando você está comparando uma única variável contra valores fixos.
Cada "case" é uma escolha, e o código fica mais claro e enxuto para essas situações.
Exemplo de uso: verificar opções de menu ou dias da semana.
2. Comparação de Valores
If Else:

Permite comparações mais complexas, como x > 10, x == y, x % 2 == 0, etc.
Aceita qualquer tipo de expressão booleana.
Switch Case:

Geralmente, só funciona com comparações simples de igualdade, como x == valor.
Não aceita expressões complexas ou intervalos.
3. Opção Padrão
Ambos têm uma forma de tratar "casos não previstos":
No if else, isso seria o else.
No switch case, é o default.
4. Performance
Em algumas linguagens, o switch case pode ser mais eficiente, pois o compilador pode otimizar sua execução em algumas situações.
Resumo: Use if else para condições mais complexas e flexíveis. Use switch case quando estiver lidando com valores fixos e quiser um código mais limpo e organizado.
*/


const temperatura = 30;

switch (temperatura) {
    case 1:
        console.log("ta meio Frio");        
    break;

    case 2:
        console.log("Ta meio quente")
    break;

    case 3:
        console.log("Ta quente")
    break;

    default:
        console.log("Naõ sei dizer")
        break;
}

const user = Alex;

switch (user) {
    case Alex:
        console.log ("Programador em treinamento");
        break;
    case Augusto:
        console.log ("Programador em com pregriça");
         break;
    case Rodolfo:
        console.log ("Professor de programação");
        break;
    default:
        console.log ("Não sei quem é esse");
        break;
}