// 🧠 Guia Rápido de JavaScript para QA

    //Executando arquivo

        /*node nomeArquivo.js */

    // Imprimindo algo no console

        console.log("");

        //Ex1
            //Estas mensagens poderão ser visualizada na aba console quando inspecionar a página HTML (F12)
            console.log("Olá Mundo");
                console.log("Bem vindo e Sucesso na sua carreira e aprendizado");

    // Declaração de Variáveis

        /*
            Variaveis não devem ser usadas com espaços ou iniciadas com númeroda seguinte forma.
            Sempre usar o camelCase por boas práticas e recorda que são case sensitive.
        */

        let nominho = "Bruno";

        /*
            Ao contrário das váriaveis, que poderão serão mutáveis dentro do meu código, as constantes não poderão receber valores diferentes durante meu desenvolvimento.
        */
        const idade = 30;
        var ativo = true;

        //Ex1
            //Pode ser alterado - Tipo String
            var nome = "Corinthians";
            nome = "SCCP";

            //Pode ser alterado - Tipo String
            let ano = 1910;
            ano = 2012;
            let age = 36;
            console.log(age);
            
            // NÃO pode ser alterado
            const torcida = "Gaviões da Fiel";
            const valorIngressoAdulto = 30;
            console.log(valorIngressoAdulto);

    // Tipos Primitivos

        /*
            I - String: Poderá ser composta por números, caracteres especiais, letras.
            II - Number: Será utilizados apenas números.
            III - Boolean: Será utilizado para quando algo for verdadeiro ou falso.
            IV - Undefined: Utilizado para deixar indefinido no sitema.
            V - Null - Para redefinições de valores.
        */

        let name_One = "Bruno";
        console.log(name_One);

        let age_Two = 1910;
        console.log(age_Two);

        let estaAprovado = true;
        console.log(estaAprovado);

        let sobreNome = undefined;
        console.log(sobreNome);

        let corSelecionado = null;
        console.log(corSelecionado);

    // Tipagem Dinâmica

        /*
            Um dos grandes benefícios da linguagem é sua dinâmica.
            Posso a princípio ter uma variável let number = 5, onde a mesmo será do tipo number, e consequentemente após dizer que number = 'Olá', que a partir deste momento será compreendida como string.
            Se utilizar a função typeof no console de programação, será impresso o tipo de váriavel que está sendo utilizada
        */

        let number = 777;
        console.log(number);

    // Operadores Matemáticos

        let salario = 1910;
    
        //+,-,*,/,**,++,--
        console.log(salario + salario);
        console.log(salario - salario);
        console.log(salario * salario);
        console.log(salario / salario);
        console.log(salario ** salario);
    
        //Incremenando
        console.log(salario++);
        console.log(salario);

        //Decrementando
        console.log(salario--);
        console.log(salario);
        
    // Operadores de Atribuições

        let valorTeclado = 777;
        console.log(valorTeclado)
        
        //Para fazer uma soma de valores entre variaveis
        valorTeclado += valorTeclado;
        console.log(valorTeclado)
        
    // Operadores de Igualdade

        //Comparando valores, resposta true
        console.log(1 == 1)
        
        //Comparando valores, resposta false
        console.log(1 == 2)
        
        //Comparando valores e tipo
        console.log(1 === 1)      // true
        console.log('1' === 1)    // false
        
    // Operadores Ternário

        //A função deste é minimiza o uso de if e else no código, podendo ser tudo definido em um única linha
        let pontos = 99
        let tipo = pontos >= 100 ? 'premium' : 'comum';
        console.log(tipo);
        
    //Operadores lógicos, utilizado para condições múltiplas

        //AND - e - && - retorna true, se ambos verdadeiro
        let idadeP1 = 36;
        let carteiraTrabalhoP1 = 'OK';
        let aplicarVagar = idadeP1 >= 18 && carteiraTrabalhoP1 == 'OK';
        console.log(aplicarVagar);
        
        //OR - ou - || - retorna true, se ao menos um é verdadeiro
        let idadeP2 = 36;
        let carteiraTrabalhoP2 = 'OK';
        aplicarVagar = idadeP2 >= 18 || carteiraTrabalhoP2 == '';
        console.log(aplicarVagar);
        
        //NOT - não - ! - retorna true, se ao menos um é verdadeiro
        let idadeP3 = false;
        let carteiraTrabalhoP3 = false;
        aplicarVagar = idadeP3 >= 18 || carteiraTrabalhoP3 == 'true';
        let candidatoRecusado = !aplicarVagar;
        console.log(candidatoRecusado);

    //Comparaçoes com valores não booleanos

        /*
        Conceito de Falsy, que serão as variáveis: Undefined, Null, 0, false, '', NaN (not a number )

        Conceito de Truthy, é baseado em tudo que é o inverso do que será considerado em Falsy, assim, caso
        seja comparado algo, seja string, number, com algo que não se encaixe em Falsy, retornará o valor
        */

        let corPersonalizada = 'red';
        let corPadrao = 'blue';
        let corPerfil = corPersonalizada || corPadrao
        console.log(corPerfil);

        let corPersonalizada02 = '';
        let corPadrao02 = 'blue';
        let corPerfil02 = corPersonalizada02 || corPadrao02
        console.log(corPerfil02);

        console.log("09 - Invertendo variáveis");
        let a = 'black';
        let b = 'white';
        let c = a;
        a = b;
        b = c;
        console.log(a + ' ' + b);

    // Estruturas de Controle

        // Condicional `if else`

            //Ex
                if (idade > 18) {
                    console.log("Maior de idade");
                } else {
                    console.log("Menor de idade");
                };

            //Ex
                const nomez = "Bruno"

                if (nomez == "Bruno") {
                    console.log("É igual")
                } else {
                    console.log("Não é igual")
                };

            //Ex
                let msg1 = 'Bom dia!';
                let msg2 = 'Boa tarde!';
                let msg3 = 'Boa noite!';
                let hourM = '10';
                let hourT = '16';
                let hourN = '23';

                if (hourM >= 6 && hourM <= 12) {
                    console.log(msg1);
                }
                else if (hourM >= 12.1 && hourM <= 18) {
                    console.log(msg2);
                }
                else {
                    console.log(msg3);
                };

            //Ex
                if (hourT >= 6 && hourT <= 12) {
                    console.log(msg1);
                }
                else if (hourT >= 12.1 && hourT <= 18) {
                    console.log(msg2);
                }
                else {
                    console.log(msg3);
                };

            //Ex
                if (hourN >= 6.00 && hourN <= 11.59) {
                    console.log(msg1);
                }
                else if (hourN >= 12.00 && hourN <= 17.59) {
                    console.log(msg2);
                }
                else {
                    console.log(msg3);
                };

        // Switch

            //Ex
                let status = "falha";

                switch (status) {
                    case "sucesso":
                        console.log("Teste passou");
                        break;
                    case "falha":
                        console.log("Teste falhou");
                        break;
                    default:
                        console.log("Status desconhecido");
                };

            //Ex
                let permissao = 'diretor'
                switch (permissao) {
                case 'comum':
                    console.log('Usuario comum')
                    break;
                case 'gerente':
                    console.log('Usuario Gerente')
                    break;
                case 'diretor':
                    console.log('Usuario Diretor')
                    break;
                // Caso não seja nenhum case acimma
                default:
                    console.log('Usuario não reconhecido')
                };

    // Laços de Repetição

        // For

            //Ex
                for (let i = 0; i < 3; i++) {
                    console.log("Execução número: " + i);
                };

            //Ex
                let indice;
                
                //Inicia em zero + Condição + Incremento
                for (indice=0; indice < 10; indice++)
                {
                    indice = array[indice];
                };

            //Ex
                for (indice = 0; indice < cidades.length; indice++)
                {
                    console.log("Os estados são: " + cidades[indice]);
                };

            //Ex
                //Inicia,  Condição, incrementa++ 
                for (let i = 0; i < 5; i++) {
                    console.log('Vai Corinthians')
                    console.log('Ou')
                    console.log('Vai Corinthians', i)
                };

            //Ex
                for (let i = 1; i <= 5; i++) {
                    if (i % 2 !== 0) {
                    console.log(i);
                    }
                };

            //Ex
                for (let i = 5; i >= 1; i--) {
                    if (i % 2 !== 0) {
                    console.log(i)
                    };
                };

        // For in

            //Ex
                const pessoaColab = {
                    nome: 'Bruno',
                    idade: 36
                };
                
                for (let chave in pessoaColab) {
                    console.log(chave)
                    console.log(chave, pessoa.nome)
                    console.log(chave, pessoa['idade'])
                }
                
            //Ex
                const cores = ['azul', 'branco', 'preto'];
                
                for (let indice in cores) {
                    console.log(indice)
                    console.log(indice, cores[indice])
                }
                
        // For of

            //Ex
                for (let cor of cores) {
                    console.log(cor);
                }

        // While

            //Ex
                let i = 5;

                while (i >= 1) {
                    if (i % 2 !== 0) {
                        console.log(i);
                }
                    i--;
                };

        // Do While

            //Ex

                do {
                    console.log('Digitando...', i);
                    i++;
                } while (i < 10)


    // Funções

        /*
            Para nomear uma função, por padrão utiliza-se Verbo + Substantivo.
            Para criarmos uma função utilizaremos a seguinte sintaxe:
            function resetColor () {}
            
            Há dois tipos de funções, as que não retornam valores, como o exemplo acima, e as que retornar.
            Para retornar valores, a sintaxe usada será:
            function multiplicarValores(valor){
                return valor * 2;
            }
        */

        //Ex
            function somar(a, b) {
                return a + b;
            }
            let resultado = somar(2, 3);

        //Ex
            function gerarNome() {
                const name = 'Bruno';
                const sobreName = 'Siqueira';
                const age = "38";

                console.log("Nome: " + name + sobreName);
                console.log("Idade: " + age);
            };
            gerarNome();

        //Ex
            //Adicionando valores a função criada
            somar("190", "150");
            gerarNome("Vai", "Corinthians", 1910);
            //Estes valores são os parâmetros da minha função.

        //Ex
            let corSite = "preto";
            function resetColor() {
                corSite = "";
            };
            //Imprimindo valor da variável
            console.log(corSite);
            //Chamada da função
            resetColor();
            //Imprimindo valor da váriavel com novo valor
            console.log(corSite);

            //Adicionando parâmetros a função
            let corSite02 = "branco";
            function resetColor02(cor, tonalidade) {
                corSite02 = cor + " " + tonalidade;
            }
            console.log(corSite02);
            //Chamada da função
            resetColor02();
            //Imprimindo valor da váriavel com novo valor
            console.log(corSite02);
            resetColor02("Roxo", "Escuro");
            //Imprimindo valor da váriavel com novo valor
            console.log(corSite02);

        //Ex
            function multiplicarValores(valor) {
                return valor * 2;
            };
            //Impressão da função utilizando uma propriedade
            console.log(multiplicarValores(5));
            let resultadoNovo = multiplicarValores(5);
            console.log(resultadoNovo * 10);

    // Arrow Function:

        const multiplicar = (x, y) => x * y;

    // Arrays

        /*
            É um conjunto de dados que pode ser acessado por um índice, Enquanto índice, será a posição exata onde encontra-se esta informação neste conjunto de dados;
            Para criarmos um array utilizaremos a seguinte sintaxe:
            let nomeDaVariavel = ['Bruno', 36, 'Corinthians', 1910]
        */

        //Ex
            let nomes = ["Bruno", "Ana", "Carlos"];
            // Imprime item 1, Ana
            console.log(nomes[1]);

        //Ex
            let Bruno = ["Siqueira", 36, "Quality Assurance", "Corinthians", 1910];
            //Imprimindo Array
            console.log(Bruno);
            //Imprimindo proprieda de um Array
            console.log(Bruno[4]);
            //Verificando tamanho de um Array
            console.log(Bruno.length);

        //Ex
            const pais = ["Brasil", "Argentina", "Alemanha", "1", "2", "3"];
            console.log(pais[0]);

        //Ex
            const cidades = ["SP", "BA", "MG",]

            cidades.forEach((elemento, index) => {
                console.log("Execução número: " + index + " = " + elemento)
                console.log(elemento);
            });

            //Adicionando item
            pais.push("Marrocos");

            //Adicionando a primeira posição
            pais.unshift("Bolívia");

            //Removendo da primeira posição
            pais.shift();

            //Removendo item
            pais.pop();

    // Objeto

        /* 
            Caso eu precise reunir informações em um único lugar, então, deverá ser criado um objeto, que poderão ser acessadas a partir da propriedade daquele objeto.
            Um objeto é composto de classes, que serão as informações reunidas dentro deste objeto.
            Para criarmos um objeto utilizaremos a seguinte sintaxe:
            let nomeDaVariavel = {
                informacao_01: " ",       - Isto é uma classe do objeto
                informacao_02: " "        - Isto é uma classe do objeto
            };
        */

        //Ex
            let usuario = {
                    nome: "Bruno",
                    idade: 30,
                    ativo: true
            };

        //Ex
            let devices = {
                    Samsung: {
                        "Preço": 5000,
                        "Modelo" : "A53",
                        Cores: {
                            cor1: "branco",
                            cor2: "azul",
                            cor3: "amarelo"
                        }
                },
            };

        //Ex
            let pessoa = {
                    name: "Bruno",
                    surName: "Siqueira",
                    age: 36,
                    profissao: "Quality Assurance",
                    timeCoracao: "Corinthians",
            };

            //Imprimindo Objeto
            console.log(pessoa);
            //Imprimindo propriedade de um Objeto
            console.log(pessoa.timeCoracao);

            console.log(usuario.nome); // Bruno

    // Lendo Propriedades dentro de um objeto

        // Laço While

            //Ex
                for (let i = 5; i >= 1; i++){
                    if(i % 2 !== 0){
                        console.log(i);
                    }
                }

                let ii = 5;

                while (ii >= 1) {
                    if(ii % 2 !== 0){
                        console.log(i);
                    }
                    ii--;
                }

    // DOM (para testes com Cypress ou Playwright)

        document.querySelector("#botao").click();
        document.getElementById("campoEmail").value = "teste@email.com";

    // Promises e Async/Await (para lidar com APIs)

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => console.log(data));

        async function buscarDados() {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const dados = await resposta.json();
            console.log(dados);
        }

    // Validações (muito usadas em testes)

        let esperado = "Login realizado com sucesso";
        let recebido = "Login realizado com sucesso";

        if (esperado === recebido) {
            console.log("✅ Teste passou!");
        } else {
            console.log("❌ Teste falhou!");
        }

    //Exemplo real com Cypress
        describe("Teste de login", () => {
            it("Deve fazer login com sucesso", () => {
                cy.visit("https://meusite.com/login");
                cy.get("#email").type("teste@qa.com");
                cy.get("#senha").type("123456");
                cy.get("#btnLogin").click();
                cy.contains("Bem-vindo").should("be.visible");
            });
        });