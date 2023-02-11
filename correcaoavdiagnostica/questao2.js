let salario = 3000

if(salario > 4000){
    var reajuste = 10
    var novosalario = (salario / 100) * reajuste
} else if(salario > 2000 && salario <= 4000){
    var reajuste = 12
    var novosalario = (salario / 100) * reajuste
} else{
    var reajuste = 15
    var novosalario = (salario/100) * reajuste

}
console.log('Questão 2')
console.log('Seu novo salário é :' +novosalario)
console.log('Seu antigo salário era:' +salario)
console.log('O seu reajuste foi de:' +(salario + novosalario))
console.log('Sua porcentagem de reajuste é:' +reajuste)

// 1 - declarar variaveis
// 2 - identificar salario
// 3 - calcular o reajuste

// //Questão 2 (nao eficiente)
//         //1 declarar as variáveis
//         var salario = 4000

//         if(salario <= 2000){
//             console.log('15%')
//         }
//         if(salario > 2000 && salario <= 4000){
//             console.log('12%')
//         }
//         if(salario > 4000){
//             console.log('10%')
//         }

// questao 2 (eficiente)
//let salario = 5000, vReajustado, nSalario, indiceReajuste

// if(salario <= 2000){
//     vReajustado = salario * 0.15           
//     indiceReajuste = 15

// }else if(salario <= 4000){
//     vReajustado = salario * 0.12           
//     indiceReajuste = 12
// }else{
//     vReajustado = salario * 0.10           
//     indiceReajuste = 10
// }
// nSalario = salario + vReajustado

// console.log('Questão 2\nNovo Salário: R$'
// console.log('Questão 2\nNovo Salário: R$'+nSalario
// +'\nValor Reajustado: R$'+vReajustado
// +'\nÍndice Reajustado:'+indiceReajuste+'%')