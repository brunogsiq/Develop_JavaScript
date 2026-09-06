# Diferença entre let var const

1. As declarações de var tem escopo global ou de função, enquanto as declarações de let e de const têm escopo de bloco.
2. Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.
3. Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com var são inicializadas com undefined, as variáveis com let e const não são inicializadas.
4. Enquanto var e let podem ser declaradas sem ser inicializadas, const precisa da inicialização durante a declaração.

    let nome = 'Tryber'; // string
    let idade = 19; // number
    let aprovado = true; // boolean

    console.log(typeof nome); // string
    console.log(typeof idade); // number
    console.log(typeof aprovado); // boolean

    let valorNulo = null;

    let variavelSemValor;
    console.log(typeof variavelSemValor); // undefined
    console.log(typeof variavelNaoDeclarada); // undefined