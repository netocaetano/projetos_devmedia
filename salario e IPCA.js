import input  from 'readline-sync';

let colecao_salarios = [
{ano: '2010', salario: 510, ipca: '5.91'},
{ano: '2011', salario: 545, ipca: '6.50'},
{ano: '2012', salario: 622, ipca: '5.84'},
{ano: '2013', salario: 678, ipca: '5.91'},
{ano: '2014', salario: 724, ipca: '6.41'},
{ano: '2015', salario: 788, ipca: '10.67'},
{ano: '2016', salario: 880, ipca: '6.29'},
{ano: '2017', salario: 937, ipca: '2.95'},
{ano: '2018', salario: 954, ipca: '3.75'},
{ano: '2019', salario: 998, ipca: '4.31'},
{ano: '2020', salario: 1039,ipca: '4.52'},
];

console.log("\nEscolha umas das alternativas abaixo: \n");
console.log("1 - Litar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = input.question("\nDigite o numero da sua escolha: ");

switch(escolha)
{

case "1":
    for ( let contador = 0; contador < colecao_salarios.length; contador++ ){

    let ano = colecao_salarios[contador].ano;
    let salario = colecao_salarios[contador].salario;
    let salario_formatado = salario.toFixed(2).replace(".",",");
    let mensagem_ano = "Ano :";
    let mensagem_sal = "Salário Mínimo: ";

    console.log("\n"+mensagem_ano.padEnd(40, ".") +ano);    
    console.log(mensagem_sal.padEnd(40, ".")+"R$"+salario_formatado+"\n");
    }
    break;

case "2":
    for ( let contador = 0; contador < colecao_salarios.length; contador++ ){

        let ano = colecao_salarios[contador].ano;
        let ipca = colecao_salarios[contador].ipca;
    
        console.log("\nAno: " +ano.padStart(40, "."));
        console.log("Inflação IPCA: "+ipca.padStart(31, ".")+"%");
        
        }
    break;

case "3":
    for ( let contador = 0; contador < colecao_salarios.length; contador++ ){
        
if (contador != 0)
{
        let ipca = colecao_salarios[contador].ipca;
        
        let sal_1 = colecao_salarios[contador-1].salario;
        let sal_2 = colecao_salarios[contador].salario;
                
        let crescimento = ((sal_2 - sal_1) / sal_1) * 100;
        let crescimento_formatado = crescimento.toFixed(2).replace(".",",");

        let salario = colecao_salarios[contador].salario;
        let ano = colecao_salarios[contador].ano;
        let salario_formatado = salario.toFixed(2).replace(".",",");
        let mensagem_sal = "Salário Mínimo: ";

        console.log("\nAno: " +ano.padStart(39, "."));
        console.log(mensagem_sal.padEnd(40, ".")+"R$"+salario_formatado);
        console.log("Crescimento Salarial: " +crescimento_formatado.padStart(22, ".")+"%");    
        console.log("Inflação IPCA: "+ipca.padStart(29, ".")+"%\n");
}

else
{
        let ipca = colecao_salarios[contador].ipca;
        let salario = colecao_salarios[contador].salario;
        let ano = colecao_salarios[contador].ano;
        let salario_formatado = salario.toFixed(2).replace(".",",");
        let mensagem_sal = "Salário Mínimo: ";

        console.log("\nAno: " +ano.padStart(39, "."));
        console.log(mensagem_sal.padEnd(40, ".")+"R$"+salario_formatado);
        console.log("Inflação IPCA: "+ipca.padStart(29, ".")+"%\n");
}
        }
    break;

default:
    console.log("opção inválida");
    break;
}