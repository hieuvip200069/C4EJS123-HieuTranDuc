const character = document.getElementById('row')
const nextUrl ="";

async function getCharacters() {
 
    const response = await fetch('https://tobitheme.net/api/characters.json');
    const data = await response.json();
    console.log(data)
    let x = data.data;
       for (let index = data.data.length-1  ; index >= 0; index--) {
        console.log(index);  
            
            character.insertAdjacentHTML('afterbegin', `<div class="custom_column">
                                                <h4 class="custom-text">${data.data[index].name}</h4>
                                                <h5 class="custom-text">Hourse: ${data.data[index].house}</h5>
                                                <img src="${data.data[index].image}" alt="" class="img">
                                                </div>`);
        };

       
    }


    
    getCharacters();


 