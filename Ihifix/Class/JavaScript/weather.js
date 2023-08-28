let temp = document.getElementById("temp");
let city = document.getElementById("city");
let btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city.value+ '&units+metric&appid=2ebf6805d9b7118cfce23cf5f9499cd8')
    .then(response => response.json())
    .then(data => {

        console.log(data)

        tempV = data.main.temp;
        temp.innerHTML = tempV;

    })

})