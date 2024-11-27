async function searchVideos() {
    const query = document.getElementById('searchQuery').value;
    const apiKey = 'AIzaSyA9P__GsRR2UjAe6rWS_INjWJ5FdGDaMuY'; // Your API key
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`);
    const data = await response.json();

    const results = document.getElementById('results');
    results.innerHTML = '';

    data.items.forEach(item => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');

        const title = document.createElement('h3');
        title.textContent = item.snippet.title;

        const thumbnail = document.createElement('img');
        thumbnail.src = item.snippet.thumbnails.default.url;

        videoDiv.appendChild(title);
        videoDiv.appendChild(thumbnail);
        results.appendChild(videoDiv);
    });
}
