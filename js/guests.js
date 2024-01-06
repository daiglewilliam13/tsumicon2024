console.log('connected guests.js')

let cards = Array.from(document.getElementsByClassName('guest-card-wrapper'));


cards.forEach((card) => {
    let video = card.children[2];
    card.addEventListener('mouseover', function () {
        video.play();
    })
    card.addEventListener('mouseout', function () {
        video.pause();
    })
})