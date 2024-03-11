
const urlParams = new URLSearchParams(window.location.search);
const postDetails = urlParams.get('post');
const imgURL = "https://static.wixstatic.com/media/";

const posts = JSON.parse(localStorage.getItem('posts'))

const current = posts.filter((post) => post.slug == postDetails)

const buildPost = (post) => {

    let postImages = post.richContent.nodes.filter((node) => node.type == "IMAGE");
    let postHTML = `
    <div class="sub-hero">
    <h1 class="page-title">${post.title}</h1>
    <p class="sub-hero-text">Read More Below</p>
    <img class="measure-marks-bottom" src="../images/measure lines.png">
    </div>`;
    let imgHTML = ``;
    postImages.forEach((image) => {
        let imgId = image.imageData.image.src.id;
        imgHTML += `<img class="post-img" height="800px" src="${imgURL}${imgId}">`
    })
    let postDate = new Date(post.lastPublishedDate).toDateString();
    postHTML +=
        `<div class="blog-wrapper">
                    <div class="blog-header" id="${post._id}">
                        <h2 class="headline">${post.title}</h2>
                        <div class="blog-details">
                            <div class="date">On ${postDate}</div>
                            <div class="author">By: TsumiCon Staff</div>
                        </div>
                    </div>
                    <div class="blog-text">
                        ${imgHTML}
                        <p class="text">${post.plainContent.replace(/ {4}|[\t\n\r]/gm, '<br/><br/>')}</p>
                    </div>
            </div>`
    document.getElementById('blog-details').innerHTML = postHTML;

}

buildPost(current[0]);