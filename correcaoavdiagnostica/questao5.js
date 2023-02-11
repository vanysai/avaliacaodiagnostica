        let nota1 = [7.0,7.0,5.5,6.0,6.0,7.0,9.0,6.8,6.5,6.0]
        let nota2 = [7.5,8.0,6.0,6.0,6.5,6.0,8.0,7.2,7.5,8.0]
        let medias = []
        let contConceitoA = 0
        let somaMedias = 0

        for(i=0; i<10; i++){
            medias[i] = (nota1[i]+nota2[i])/2

            if(medias[i] > 9) contConceitoA++
            
            somaMedias+= medias[i]            
        }

        let mediaGeral = somaMedias/medias.length
        console.log('Questão 5\nQuantidade de alunos conceito A:'+contConceitoA
        +'\nMédia geral da turma:'+mediaGeral)