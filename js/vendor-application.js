console.log('vendor app js connected');
let isLoading = false;
const submitVendorURL = 'https://tsumicon.wixsite.com/my-site/_functions/vendorApplication';
const panelDescText = document.getElementById('description');
const panelDescLabel = document.getElementById('desc-label');
const appType = document.getElementById('app-type');
const showPanelDesc = () => {
    panelDescText.classList.remove('hide');
    panelDescText.classList.add('show');
    panelDescLabel.classList.remove('hide');
    panelDescLabel.classList.add('show');
}

const hidePanelDesc = () => {
    panelDescText.classList.remove('show');
    panelDescText.classList.add('hide');
    panelDescLabel.classList.remove('show');
    panelDescLabel.classList.add('hide');
}

const togglePanelDesc = () => {
    if (appType.value == "panel") {
        showPanelDesc();
    } else {
        hidePanelDesc();
    }
}

appType.addEventListener("change", togglePanelDesc)

const submitVendorApp = async () => {
    if (isLoading === false) {
        let canSubmitVendorApp = true;
        //disable button
        let button = document.getElementById('vendor-submit');
        button.innerText = "Submiting ";
        button.classList.add('loading-spinner');
        button.disabled = true;
        //get form elements to validate 
        let applicationType = document.getElementById('app-type');
        let firstName = document.getElementById('first-name');
        let lastName = document.getElementById('last-name');
        let phone = document.getElementById('phone-number');
        let email = document.getElementById('email-address');
        let handles = document.getElementById('handles');
        let description = document.getElementById('description')
        //add form to array and check for values
        let formArray = [];
        formArray.push(applicationType, firstName, lastName, phone, email, handles)
        formArray.forEach((el) => {
            if (el.value.length < 1) {
                el.classList.add('fix'); //highlight form element if no value
                canSubmitVendorApp = false;
            } else {
                el.classList.remove('fix');
            }
        })
        let data = { //object to post to wix
            applicationType: applicationType.value,
            firstName: firstName.value,
            lastName: lastName.value,
            emailAddress: email.value,
            phoneNumber: phone.value,
            socials: handles.value,
            description: description.value
        }
        if (canSubmitVendorApp === false) {
            alert('application incomplete');
            button.innerText = "Submit";
            button.classList.remove('loading-spinner');
            button.disabled = false;
            return;
        } else { //post data to wix collection
            isLoading = true;
            console.log(data);
            fetch(submitVendorURL, {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Accept": "*",
                    "Content-Type": "application/json; charset=UTF-8'"
                },
                body: JSON.stringify(data),
            })
                .then(response => (response.json()))
                .then(data => {
                    console.log(data)
                    alert("Success! Thank you for applying! We will be in touch shortly if we decide to move forward")
                    button.disabled = false;
                    button.classList.remove('loading-spinner')
                    button.innerText = "Sign Up"
                    setTimeout(() => { //makes user wait 5 seconds before they can try to submit another application
                        isLoading = false;
                    }, 5000)
                });
        }
    } else {
        alert('you must wait a bit')
    }
}

