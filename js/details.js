
const urlParams = new URLSearchParams(window.location.search);
const postDetails = urlParams.get('post');

console.log(postDetails);

const posts = JSON.parse(localStorage.getItem('posts'))

console.log(posts)
const current = posts.filter((post) => post.slug == postDetails)

console.log(current)

const buildPost = (post) => {
    let postHTML = `
    <div class="sub-hero">
    <h1 class="page-title">${post.title}</h1>
    <p class="sub-hero-text">Read More Below</p>
    <img class="measure-marks-bottom" src="../images/measure lines.png">
    </div>`;
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
            </div>`
    document.getElementById('blog-details').innerHTML = postHTML;

}

buildPost(current[0]);