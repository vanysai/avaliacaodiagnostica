var num_mulheres = 0;
var num_10 = 0;
var sexo = 0;
var filmes = 0;

for (i = 0; i < 50; i++) {

    sexo = Math.floor(Math.random() * 2)
    filmes = Math.floor(Math.random() * 22)

    if (sexo == 1){
        num_mulheres++;

    }
    if (filmes > 10){
        num_10++;
    }
}

console.log('Questão 4')
console.log('Quantidade de mulheres: ' +num_mulheres)
console.log('Quantidade de pessoas assistiram mais que 10 filmes: ' +num_10)
console.log('Percentual de mulheres: ' +((num_mulheres * 100) / 50))