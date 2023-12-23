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
            localStorage.setItem("data", JSON.stringify((data)));
            buildPost(data)
        }
    } catch (err) {
        console.log(err);
    }
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
        postHTML +=
            `<div class="blog-wrapper">
                    <div class="blog-header" id="${post._id}">
                        <a  href="/details.html?post=${post.slug}" target="_blank"><h2 class="headline">${post.title}</h2></a>
                        <div class="blog-details">
                            <div class="date">On ${postDate}</div>
                            <div class="author">By: TsumiCon Staff</div>
                        </div>
                    </div>
                    <div class="blog-text">
                        <p class="text">${post.plainContent.replace(/ {4}|[\t\n\r]/gm, '<br/><br/>')}</p>
                    </div>
                    <div class="analytics">
                        <div class="view-count">
                            ${post.viewCount} views
                        </div>
                        <div class="like-count">
                            ${post.likeCount} likes
                        </div>
                        <button class="like-button">
                            💖
                        </button>
                    </div>
            </div>`;
    }
    document.getElementById('blogs').innerHTML = postHTML;

}


getPosts(postURI);

