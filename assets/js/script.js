const form = document.querySelector('#form')

form.addEventListener('submit', function(event){ //adicionando um evento de submissao
    event.preventDefault() //nao dar reload na pagina quando atualizar os dados

    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value

    const bmi = (weight / (height * height)).toFixed(2) //fixar dois valores após a virgula

    const value = document.querySelector('#value')
    let description = ''

    value.classList.add('attention') // adicionar a classe css de cor vermelha

    document.querySelector('#infos').classList.remove('hidden') //removendo a classe pra quando clicar no botao a div aparecer

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    }   else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!'
        value.classList.remove('attention') //removendo a cor vermelha
        value.classList.add('normal')//adicionando a cor verde
    }   else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'
    }   else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'
    }   else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'
    }   else {
        description = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = bmi.replace('.', ',')
    document.querySelector('#description').textContent = description
}) 