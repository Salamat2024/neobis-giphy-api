
fetch("https://api.giphy.com/v1/gifs/search?api_key=PV2ZWWf3tgqbbZ81FxfGo7ORrrCHVrRH&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
.then(res=>res.json())
.then(json=>console.log(json))