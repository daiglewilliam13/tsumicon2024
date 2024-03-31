
let cards = Array.from(document.getElementsByClassName('guest'));
let selectors = Array.from(document.getElementById('guest-selectors').children);
let sections = Array.from(document.getElementsByClassName('guest-dropdown'));


cards.forEach((card) => {
    let video = card.children[2];
    video.addEventListener('loadeddata', function () {
        if (video.readyState > 3) {
            card.addEventListener('mouseover', function () {
                video.play();
            })
            card.addEventListener('mouseout', function () {
                video.pause();
            })

        }

    })
})

const highlightSelector = (value) => {
    selectors.forEach((el) => {
        let button = el
        if (button.dataset.select == value) {
            button.classList.add('selected')
        } else {
            button.classList.remove('selected');
        }
    })
}

const showSection = (value) => {

    sections.forEach((div) => {
        if (div.id == value) {
            div.classList.add('show');
        } else {
            div.classList.remove('show');
        }
    })
    let delay = 0;
    cards.forEach((card) => {
        let cardParent = card.parentElement.parentElement.id;
        console.log(cardParent);
        if (cardParent == value) {
            setTimeout(() => {
                card.classList.add('fade-in')
            }, delay)
            delay = delay + 100;
        } else {
            card.classList.remove('fade-in')
        }
    })
}
selectors.forEach((el) => {
    //figure out which button was pressed
    el.addEventListener('click', function () {
        highlightSelector(this.dataset.select)
        showSection(this.dataset.select);
    })

})

showSection('goh');


