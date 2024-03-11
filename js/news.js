console.log('connected');

const postURI = 'https://tsumicon.wixsite.com/my-site/_functions/myPosts';


async function getPosts(url) {
    try {

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });
        let data = await response.json();
        if (response) {
            localStorage.clear();
            localStorage.setItem("posts", JSON.stringify((data.items)));
            buildPost(data)
        }
    } catch (err) {
        console.log(err);
    }
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)

}
const addCopyFuction = (elArray) => {
    elArray.forEach((el) => {
        el.addEventListener('click', function () {
            copyToClipboard(el.previousElementSibling.value)
            el.previousElementSibling.select();
            el.nextSibling.nodeValue = "Link Copied!"
        })
    })
}

function buildPost(data) {
    let postHTML = `
    <div class="sub-hero">
    <h1 class="page-title">Latest News</h1>
    <p class="sub-hero-text">Staff Blogs and Other updates about Tsumicon</p>
    <img class="measure-marks-bottom" src="../images/measure lines.png">
    </div>`;
    for (let post of data.items) {
        let postDate = new Date(post.lastPublishedDate).toDateString();
        let truncatedText = post.plainContent.substring(0, 300)
        postHTML +=
            `<div class="blog-wrapper">
                    <div class="blog-header" id="${post._id}">
                        <a  href="/details.html?post=${post.slug}"><h2 class="headline">${post.title}</h2></a>
                        <div class="blog-details">
                            <div class="date">On ${postDate}</div>
                            <div class="author">By: TsumiCon Staff</div>
                        </div>
                    </div>
                    <div class="blog-text">
                        <p class="text fade">${truncatedText.replace(/ {4}|[\t\n\r]/gm, '<br/><br/>')}</p>
                        <p><a href="/details.html?post=${post.slug}"><b>see more...</b></a></p> 
                        <p><input value="https://www.tsumicon.com/news/details/html?post=${post.slug}"></input> <img src="../images/copy-icon.png" class="copy-icon">Share<p>
                    </div>
            </div>`;
    }
    document.getElementById('blogs').innerHTML = postHTML;
    let copyButtons = Array.from(document.getElementsByClassName('copy-icon'))
    addCopyFuction(copyButtons);
}


getPosts(postURI);

