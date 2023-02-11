// //Questão 3
// let base = 50, traducao = 's', minicurso = 's'
// if(minicurso == 's')
//     base += 20
// if(traducao == 's')
//     base +=10
// console.log('Questão 3\nValor da Inscrição: R$'+base)

var valorbase = 50
var traducao = 'S'
var minicurso = 'S'

if (traducao == 'S'){
    var novovalor =  valorbase += 10
}if (minicurso == 'S'){
    var novovalor2 = novovalor += 20
}

console.log('Questão 3\nValor da Inscrição: R$ ' +valorbase)
console.log(novovalor2)