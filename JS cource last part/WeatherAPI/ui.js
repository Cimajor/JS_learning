class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather){
        this.location.textContent = weather.name
        this.desc.textContent = weather.weather[0].description
  //      this.details.textContent = weather.weather[0].description
        // this.details.textContent = "Hz"
        let icon_url = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        this.icon.setAttribute('src', icon_url)
        
        
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`
        this.dewpoint.textContent = `Temperature: ${weather.main.temp}`
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`

    }
}