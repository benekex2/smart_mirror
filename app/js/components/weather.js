import React from 'react'
import moment from 'moment'	

export class Weather extends React.Component {

	state = {
		cityName: '',
		weatherList: [],
		currentWeather: []
	}

	iconTable = {
		"01d": "wi-day-sunny",
		"02d": "wi-day-cloudy",
		"03d": "wi-cloudy",
		"04d": "wi-cloudy-windy",
		"09d": "wi-showers",
		"10d": "wi-rain",
		"11d": "wi-thunderstorm",
		"13d": "wi-snow",
		"50d": "wi-fog",
		"01n": "wi-night-clear",
		"02n": "wi-night-cloudy",
		"03n": "wi-night-cloudy",
		"04n": "wi-night-cloudy",
		"09n": "wi-night-showers",
		"10n": "wi-night-rain",
		"11n": "wi-night-thunderstorm",
		"13n": "wi-night-snow",
		"50n": "wi-night-alt-cloudy-windy"
	}

	getData() {

 		fetch("http://api.openweathermap.org/data/2.5/forecast/daily?id=2673730&mode=json&units=metric&appid=0997af5b9449c9c472cfe9cc4d1d8895", {
 			method: 'GET',
 		}).then(res => {
 	        res.json().then((data) => {  
 	        this.setState({
 	          cityName: data.city.name,
 	          weatherList: data.list
 	        });
 	      });
 		});

 		fetch("http://api.openweathermap.org/data/2.5/weather?id=2673730&mode=json&units=metric&appid=0997af5b9449c9c472cfe9cc4d1d8895", {
 			method: 'GET',
 		}).then(res => {
 	        res.json().then((data) => {  
 	        this.setState({
 	          currentWeather: data
 	        });
 	      });
 		});

	}

	floatOrNull = (value) => {
	  const parsed = parseFloat(value);
	  return isNaN(parsed) ? null : parsed;
	};

	componentWillMount() {
		this.getData();
 	}

 	componentDidMount(){
	  	window.setInterval(function () {
	    	this.getData();
	    }.bind(this), 60000);
  	}



	render() {

		const cityName = this.state.cityName;
		const weatherList = this.state.weatherList;
		const currentWeather = this.state.currentWeather;

    	return (
    		<div>
        		<h2>Weather: {cityName}</h2>

        		{currentWeather.main && currentWeather.wind && currentWeather.clouds && currentWeather.weather ? (
					<div>
						<p>
							<i className={`main wi ${this.iconTable[currentWeather.weather[0].icon]}`}></i> 
							<span className="temp">{Number((currentWeather.main.temp).toFixed(1))}&#176;C</span>
						</p>
						<p>
							<i className="additional wi wi-humidity"></i>
							<span>{currentWeather.main.humidity} %</span>
							<i className="additional wi wi-barometer"></i>
							<span>{currentWeather.main.pressure} hpa</span>
						</p>
						<p>
							<i className="additional wi wi-strong-wind"></i>
							<span>{currentWeather.wind.speed} m/s</span>
							<i className="additional wi wi-cloudy"></i>
							<span>{currentWeather.clouds.all} %</span>
						</p>
					</div>
				) : (null)}


        		{weatherList ? (weatherList.map((item, index) => {
        				const date = moment.unix(item.dt).format('dddd');
        				let icon = item.weather[0].icon;
        				let classIcon = "main wi " + this.iconTable[icon];
        				let floatTemp = this.floatOrNull(item.temp.day);
        				let roundTemp = Number((floatTemp).toFixed(1));
        				if(index > 0) {
        					return (
        						<div className="dayWeather" key={index}>
        							<h3>{date} <i className={classIcon}></i></h3>
        							<p>
        							<i className="additional wi wi-thermometer"></i>
									<span>{roundTemp} &#176;C</span>
									<i className="additional wi wi-barometer"></i>
									<span>{item.pressure} hpa</span>
									</p>
								</div>
							);
        				} 
					})
				) : (null)}
        	</div>
       	);
    }
}
