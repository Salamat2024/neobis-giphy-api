
// fetch("https://api.giphy.com/v1/gifs/search?api_key=PV2ZWWf3tgqbbZ81FxfGo7ORrrCHVrRH&q=&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
// .then(res=>res.json())
// .then(data=>console.log(data))


// https://api.giphy.com/v1/gifs/search?api_key=PV2ZWWf3tgqbbZ81FxfGo7ORrrCHVrRH&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

async function getResponse() {
    let response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=PV2ZWWf3tgqbbZ81FxfGo7ORrrCHVrRH&q=lion&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
    let content = await response.json();
  
    const container = document.querySelector('.image-container');
    const wrapper=document.querySelector('.wrapper')
    container.innerHTML = '';
    // wrapper.innerHTML='';
  
    content.data.forEach(gif => {
      const img = document.createElement('img');
      img.src = gif.images.fixed_height.url;
      container.appendChild(img);

    //   const images=document.createElement('img')
    //   images.src= gif.images.fixed_height.url;
    //   wrapper.appendChild(images)
        
    });
  }
  
  getResponse();
  









// for (key in content){

    //     card.innerHTML += `<li class="post">
    //                         <h4>${content[key.title]}</h4>
    //                         img src="${content[key].url}"
    //                       </li>`
    //   console.log( content[key])