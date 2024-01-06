console.log('connected guests.js')

let card = document.getElementsByClassName('guest-card-wrapper')[0];
console.log(card)

card.addEventListener('mouseover', function () {
    console.log('mouse in')
})