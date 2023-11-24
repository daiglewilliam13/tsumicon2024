console.log('programming.js connected');

changeTab = (event, tabName) => {
    let tabLinks = document.getElementsByClassName('tab');
    for (let i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i].innerText === event.target.innerText) {
            console.log('matched')
            tabLinks[i].classList += " selected";
        } else {
            tabLinks[i].classList = "tab";
        }

    }
    let tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        if (tabContent[i].id === tabName) {
            tabContent[i].classList = "tab-content show";
        } else {
            tabContent[i].classList = "tab-content"
        }
    }
}