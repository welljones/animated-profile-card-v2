// Show Social Networks
const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>){
        // We add the animation class to the div tag with the card__social class
        social.classList.toggle('animation')
    }
}
showSocial('card-toggle', 'card-social')