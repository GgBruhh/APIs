const queryInput = document.getElementById('search');
const form = document.querySelector('form');
const display = document.getElementById('gif-display');

async function getGif(){
    //requesting data based on input
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', 
    {params: {q: queryInput.value, api_key:'Ky08vCXWUkSxKg5S8h3ww7r75Gov9JmY'}})

    //setting up the randomizer for which GIF gets displayed
    let numResults = res.data.data.length;
    let randomIdx = Math.floor(Math.random() * numResults);

    
    //creating gif to be displayed and appending it to the webpage
    const newGif = document.createElement('img');
    display.append(newGif);
    newGif.src = res.data.data[randomIdx].images.original.url;
    queryInput.value = '';
}

    //creating remove button and giving it functionality
    const newBtn = document.createElement('button');
    newBtn.classList.add('remove')
    newBtn.innerText = 'Remove'
    form.append(newBtn)


    newBtn.addEventListener('click', function(){
        display.innerHTML = ''; 
    })

form.addEventListener('submit', function(e){
    e.preventDefault();
    getGif()
})



