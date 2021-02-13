class Weather {
    constructor(city, state){
        this.apiKey = "24d706919bf49fb0bf6ae02611084f5a";
        this.city = city;
        this.state = state
    }

    //Fetch weather from API
    async getWeather(){
        const responce = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric
        `)
        const responseData = await responce.json()

        return responseData
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}