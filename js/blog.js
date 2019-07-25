function displayPosts(data) {
    let postHtml = '';

    for (let i=0; i < data.items.length; i++) {
        let post = data.items[i];
        console.log(post);
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

fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40wbgneto')
    .then(
        function (response) {
            if (response.status !== 200) {
                alert("Could not load posts, please try again later");
                return;
            }

            response.json().then(displayPosts);
        }
    )
    .catch(function (err) {
        alert("Could not load posts, please try again later");
    });