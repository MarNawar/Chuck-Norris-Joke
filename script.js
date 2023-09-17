const jokeElement = document.getElementById('joke');
const btn = document.getElementById('joke-btn');

function generateImage(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function(){
    if(this.readyState === 4){
      if(this.status === 200){

        const joke = JSON.parse(this.response).value;        
        jokeElement.innerHTML = `
          "${joke}"
        `;
      }
      else{
        jokeElement.innerHTML = `
          "try sth else(that is not funny!)"
        `;
      }
    }
  }
  xhr.send();
}


btn.addEventListener("click", generateImage);
