import { vendors } from './vendors.js';
import { artistAlley } from './vendors.js';

console.log('programming.js connected');
let changeTab = (event, tabName) => {
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
window.changeTab = changeTab;

//populate vendors
let vendorList = ""
// <div class="vendor-wrapper">
//     <p></p>
//     <p></p>
// </div>

vendors.forEach((vendor) => {
    vendorList += `<div class="vendor-wrapper">
         <p>${vendor}</p>
         <p>Booth#: TBD</p>
 </div>`
})
let vendorListWrapper = document.getElementById('vendor-list');
vendorListWrapper.innerHTML = vendorList;

//populate artist alley 
let artistList = ""

artistAlley.forEach((artist) => {
    artistList += `<div class="vendor-wrapper">
         <p>${artist}</p>
         <p>Booth#: TBD</p>
 </div>`
})

let artistListWrapper = document.getElementById('artist-list');
artistListWrapper.innerHTML = artistList;



