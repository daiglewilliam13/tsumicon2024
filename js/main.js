data = {
    email: ""
}

if (window.innerWidth > screen.availWidth) {
    let head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    let link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = '../styles/desktop-mobile.css';
    // Append link element to HTML head
    head.appendChild(link);
    alert('You are forcing the desktop site while browsing on your phone. Uncheck "Desktop Site" in your phone settings for a better browsing experience')
}
let submitEmailURL = "https://tsumicon.wixsite.com/my-site/_functions/mailingList"
let canSubmit = true;
let dateOptions = { year: 'numeric', month: 'short', hc: 'h12', hour: 'numeric', minute: '2-digit' }
const submitEmail = () => {
    let currentTime = Date();
    if (canSubmit) {
        canSubmit = false
        let emailAddress = document.getElementById('email-input');
        const button = document.getElementById('email-submit');
        button.innerText = "Submiting ";
        button.classList.add('loading-spinner');
        button.disabled = true;
        console.log(emailAddress.value)
        data.email = emailAddress.value
        data.submissionTime = currentTime.toLocaleString();
        fetch(submitEmailURL, {
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
                alert("Success! Thank you for your interest in Tsumicon")
                button.disabled = false;
                button.classList.remove('loading-spinner')
                emailAddress.value = "";
                button.innerText = "Sign Up"
                setTimeout(() => {
                    canSubmit = true;
                }, 5000)
            });
    } else {
        alert("You must wait a bit");
    }
}

const testFunction = () => {
    alert('it worked');
}
