
async function getResponse(query) {
  const apiKey = 'PV2ZWWf3tgqbbZ81FxfGo7ORrrCHVrRH';
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
  const content = await response.json();

  const container = document.querySelector('.image-container');
  container.innerHTML = '';

  content.data.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.fixed_height.url;
    container.appendChild(img);
  });
}

document.getElementById('header-search').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = event.target.value;
    getResponse(query);
  }
});
getResponse()
  






