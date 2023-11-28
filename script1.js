const jokeElement = document.getElementById('joke');
const btn = document.getElementById('joke-btn');

async function generateImage(){
  jokeElement.innerHTML=`<div class="spinner-container">
                          <div class="spinner"></div>
                        </div>`;
    try{
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const joke = await res.json(); 

      jokeElement.innerHTML = `
        "${joke.value}"
      `;
    }
    catch{
      jokeElement.innerHTML = `
        "try sth else(that is not funny!)"
      `;
    }
}


btn.addEventListener("click", generateImage);

// for the first time DOM loaded
generateImage();
