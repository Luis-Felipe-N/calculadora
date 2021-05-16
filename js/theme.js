const radioThemes = document.getElementsByName('themes')
let theme = 'theme1'

radioThemes.forEach(radio => {
    radio.addEventListener('input', () => {
        if ( radio.checked ) {
            document.body.classList.remove(theme)
            theme = radio.getAttribute('value')

            document.body.classList.add(theme)
        }
    })  
});