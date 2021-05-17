const containerKeys = document.querySelector('.teclas')
const display = document.querySelector('[data-js="input-display"]')

// const validarInput = ( operador ) => {
//     let valorDisplay = display.value

//     if ( isNaN(valorDisplay) ) {
//         display.value = 'Digite somente números'
//     } else {
//         let valor1 = valorDisplay;
//         let operator = operador
//     }
// }

const writeInDisplay = key => {
    display.value += key.innerText
}

const clearOnly = () => display.value = display.value.slice(0, -1)

const resetDsiplay = () => display.value = ''

const makeCalc = () => {
    let resolucao;
    
    try {
        resolucao = eval(display.value)
    } catch (error) {
        display.value = 'Conta Inválida!'
        return
    }

    if ( isNaN(resolucao)) {
        display.value = 'Conta Inválida!'
    } else {
        display.value = resolucao
    }
}


function getKey(e) {
    const key = e.target

    if ( key.classList.contains('keys-number') || key.classList.contains('operator') ) writeInDisplay(key)
    if ( key.classList.contains('clearOnly') ) clearOnly()
    if ( key.classList.contains('reset') ) resetDsiplay()
    if ( key.classList.contains('equal') ) makeCalc()
}

containerKeys.addEventListener('click', getKey)
// display.addEventListener('input', validarInput)