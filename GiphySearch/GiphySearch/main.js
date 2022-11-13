document.querySelector('.js-go').addEventListener('click', function(){
    let input = document.querySelector('.js-userinput').value;
    getinput(input);
})

document.querySelector('.js-userinput').addEventListener('keyup', function(e){
    if(e.which === 13){
        let input = document.querySelector('.js-userinput').value;
        getinput(input);
    }
})

function getinput(items){
    
    let query = items.split(' ').join("+");

    let url = "https://api.giphy.com/v1/gifs/search?api_key=SZpFFIporWJLhdYxHwXZgrRGZXq4Jn1e&q=" + query + "&limit=25&offset=0&rating=g&lang=en";

    let giphyAJAXcall = new XMLHttpRequest();
    giphyAJAXcall.open('GET', url);
    giphyAJAXcall.send()

    giphyAJAXcall.addEventListener('load', function(e){
    let data = e.target.response;
    pushtoDOM(data);
})

}



function pushtoDOM(input){

    let response = JSON.parse(input);
    let imageURLs = response.data;

    let container = document.querySelector(".js-container");

    container.innerHTML = "";

    
    imageURLs.forEach(function(image){

    let src = image.images.fixed_height.url;
    console.log(src);

    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
});

}