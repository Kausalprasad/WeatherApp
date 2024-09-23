const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIkey="d109fef6d2652254ac157e991c0b550c";

const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")


async function CheckWeather(city){

const response= await fetch(APIurl+city+`&appid=${APIkey}`)
if(response.status==404){
   document.querySelector(".error").style.display="block";
   document.querySelector(".weather").style.display="none";
}else{
   let data=await response.json();

console.log(data)
let temp=Math.round(data.main.temp);
let speed=Math.floor(data.wind.speed);
       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".temp").innerHTML=temp+"°c";
       document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
       document.querySelector(".Windspeed").innerHTML=speed+" km/h";
     
        
    if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"

        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
         } 
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
         } 
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
         } 
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"

         } else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png"
         }

         document.querySelector(".weather").style.display="block";
         document.querySelector(".error").style.display="none";
}

        }



searchbtn.addEventListener('click',()=>{
     CheckWeather(searchBox.value)
})