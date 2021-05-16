const containerKeys = document.querySelector('.teclas')
const display = document.querySelector('[data-js="input-display"]')


const writeInDisplay = key => {

    display.value += key.innerText
}

const clearOnly = () => display.value = display.value.slice(0, -1)

const resetDsiplay = () => display.value = ''


function getKey(e) {
    const key = e.target

    if ( key.classList.contains('keys-number') || key.classList.contains('operator') ) writeInDisplay(key)
    if ( key.classList.contains('clearOnly') ) clearOnly()
    if ( key.classList.contains('reset') ) resetDsiplay()
    if ( key.classList.contains('equal') ) resetDsiplay()
}

containerKeys.addEventListener('click', getKey)