function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns! Você foi aprovado!'
    } else if(med >= 4||med >=5) {
    msg = 'Está de recuperação!'
}
    else { // senão...
        msg = 'Estude um pouco mais!  Você foi reprovado! '
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:white;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
}