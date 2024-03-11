import { vendors } from './vendors.js';
import { artists } from './vendors.js';

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
// <div class="vendor-wrapper">
//     <p></p>
//     <p></p>
// </div>


let vendorList = ""

let sortedVendorAlpha = vendors.toSorted(function(a, b) {
    var textA = a.vendor.toUpperCase();
    var textB = b.vendor.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

let sortedVendorNum = vendors.toSorted(function(a, b) {
    var textA = a.booth;
    var textB = b.booth;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});



let vendorListWrapper = document.getElementById('vendor-list');

//populate artist alley 

let sortedArtistAlpha = artists.toSorted(function(a, b) { //toSorted creates copy;
    var textA = a.vendor.toUpperCase();
    var textB = b.vendor.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

let sortedArtistNum = artists.toSorted(function(a, b) {
    var textA = a.booth;
    var textB = b.booth;
    if(textA == "On Map" || textB == "On Map") {
        return 1
    } else {
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
});

let artistListWrapper = document.getElementById('artist-list');

const buildVendorList = (vendorArr) => {
    vendorArr.forEach((vendor) => {
        vendorList += `<div class="vendor-wrapper">
             <p>${vendor.vendor}</p>
             <p>Booth #: ${vendor.booth}</p>
     </div>`
    })
vendorListWrapper.innerHTML = vendorList;

}

const buildArtistList = (vendorArr) => {
    let artistList = ""
    vendorArr.forEach((artist) => {
        artistList += `<div class="vendor-wrapper">
             <p>${artist.vendor}</p>
             <p>Booth#:${artist.booth}</p>
     </div>`
    })
    artistListWrapper.innerHTML = artistList;
}

buildVendorList(sortedVendorAlpha);
buildArtistList(sortedArtistAlpha);

