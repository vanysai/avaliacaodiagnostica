// let salario = 3000
// let reajuste = (3000/100)*12
// let novosalario = (salario + reajuste)
// let indice = '12%'

// console.log('salario:' , salario)
// console.log('novosalario:' , novosalario)
// console.log('indice:' , indice)
// console.log('reajuste: ' , reajuste)


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