
// Call all id of index file
const inputField = document.getElementById('input-field');
const searchResult = document.getElementById('search-result')
const API_KEY = `e13cd323a108a81e1c816655490a93ad`

//  Search Button 
const searchBtn = () => {
    // console.log('Button is active');
    const searchText = inputField.value;
    // console.log(searchText);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResults(data))

}

// Showing results
const displayResults = result => {
    // console.log(results);
    searchResult.textContent = '';
    const div = document.createElement('div');
    div.classList.add('detail')
    div.innerHTML = `
    <img id="weather-icon" src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
    <h1 class="city">${result.name}<span class="country">${result.sys.country}</span></h1>
    <h3><span class="temp">${result.main.temp}</span>&deg;C</h3>
    <h1 class="condition" class="lead">${result.weather[0].main}</h1>
    <h4><span>Minimum : ${result.main.temp_min}</span>&deg;C</h4>
    <h4><span>Maximum : ${result.main.temp_max}</span>&deg;C</h4>
    `;
    searchResult.appendChild(div);
}





















































