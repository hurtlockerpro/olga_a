
class Weather{
    currentUnit = ''
    units = { // enum
        imperial:'imperial',    
        metric:'metric'
    }
    apiKey = 'e94a06c22c14c9ab3059f89372eb2541'
    searchCity = 'Tallinn'
    iconTemplate = 'http://openweathermap.org/img/w/{icon}.png'
    
    #weather = {
        City:"",
        Temperature:0,
        Description:'',
        Icon:''
    }

    #blockName = 'main'
    #block
    #title
    #description
    #icon
    #temperature
    #btn

    constructor(){

        this.#block = document.querySelector(this.#blockName)
        this.#title = this.#block.querySelector('h1')
        this.#description = this.#block.querySelector('.description')
        this.#icon = this.#block.querySelector('.icon')
        this.#temperature = this.#block.querySelector('.temperature')
        this.#btn = this.#block.querySelector('button')

        this.#btn.addEventListener('click', event => {
            console.log('btn clicked')
            this.changeToCelcius()
        })

    }
    

    set city(newCity){
        this.searchCity = newCity
    }

    get city(){
        return this.searchCity
    }

    set unit(newUnit){
        this.currentUnit = newUnit
    }

    getWeatherData(){
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +  this.searchCity + '&appid=' 
        + this.apiKey + '&units=' + this.currentUnit

        fetch(url)
            .then(response => response.json())
            .then(data => {

                //console.log('Success:', data);
                // 1 parse data
                this.parseData(data)
                // 2 show 
                this.showWeatherHTML()

                console.log(this.#weather)
            })
    }

    parseData(data){

        if (data.name.toString().trim().length > 0) this.#weather.City = data.name
        this.#weather.Temperature = data.main.temp
        this.#weather.Description = data.weather[0].description
        this.#weather.Icon = this.iconTemplate.replace('{icon}', data.weather[0].icon)
    }

    showWeatherHTML(){
        this.#title.innerHTML = this.#weather.City
        this.#description.innerHTML = this.#weather.Description
        this.#temperature.innerHTML = this.#weather.Temperature
        
        this.#icon.querySelector('img').src =  this.#weather.Icon
    }

    changeToCelcius(){
        let btnF = 'Fahrengheit'
        let btnC = 'Celcius'
        if (this.#btn.innerText == btnF)
        {
            this.unit = this.units.imperial
            this.#btn.innerText = btnC
        } else if (this.#btn.innerText == btnC){
            this.unit = this.units.metric
            this.#btn.innerText = btnF
        }
        this.getWeatherData()
    }
}

let weatherAPI = new Weather()
weatherAPI.city = 'London'
weatherAPI.unit = weatherAPI.units.metric
weatherAPI.getWeatherData()
console.log('-- end --')

