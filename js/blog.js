// Parse and display feed
function displayPosts(data) {
    let postHtml = '';

    for (let i=0; i < data.items.length; i++) {
        let post = data.items[i];

        postHtml += `
            <div class="post">
                <a href="${post.link}" target="_blank" rel="nofollow" class="post__content">
                    <div class="post__thumbnail">
                        <img src="${post.thumbnail}" class="post__image">
                    </div>
                    <div class="post__info">
                        <h3 class="post__title">${post.title}</h3>
                        <p class="post__date">${post.pubDate}</p>
                    </div>
                </a>
            </div>
        `;
    }

    mediumPosts.innerHTML = postHtml;
}

// Requests medium feed
let request = new XMLHttpRequest();
request.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40wbgneto');
request.send();

request.onload = function () {
    if (this.status === 200) {
        return displayPosts(JSON.parse(this.responseText));
    }

    mediumPosts.innerHTML = 'Could not load posts, please try again later';
};