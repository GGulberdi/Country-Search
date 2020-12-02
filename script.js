// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");
////////////

function getCountry(country){
  const url = 'https://restcountries.eu/rest/v2/name/'

    
    const request = new XMLHttpRequest();
    request.responseType = 'json';
  
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        const [data] = request.response;
          renderCountry(data);
      }
    }
       request.open('GET', (url + country));
      request.send();
  }
  btn.addEventListener('click', displayCountry);

function getCountryAndNeighbour (country){
  url = 'https://restcountries.eu/rest/v2/name/'
  alpha = 'https://restcountries.eu/rest/v2/alpha/'
  const request = new XMLHttpRequest();
      request.onclick = () => {
      const [data] = JSON.parse(this.responseText);
      let neighbour = data.borders;
      renderCountry(data, 'neighbour');
      if(!neighbour)return

      request2.open('GET', (url + country + alpha +neighbour));
      request2.send();
  }
}
   
  
  // Clear previous results and display results to webpage
  // const displaySuggestions = (event) => {
  //   event.preventDefault();
  //   while(responseField.firstChild){
  //     responseField.removeChild(responseField.firstChild);
  //   }
  //   getSuggestions();
  // }
  
  // btn.addEventListener('click', displaySuggestions);
  