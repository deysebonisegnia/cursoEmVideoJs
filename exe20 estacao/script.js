function estação() { // Sim, é possível usar acentuação
    let mês = prompt('Digite o mês em extenso (ex: Setembro , ou 09)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO' : case 'FEVEREIRO': case 'MARÇO':  case '01': case '02':case '03':case '1': case '2':case '3': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':case '04': case '05': case '06':case '4':case '5':case '6':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '07': case '08': case '09': case '7':case '8':case '9':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}

// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.
