import React from 'react'	

export class Weather extends React.Component {

	state = {
		temp: "",
		pressure: "",
		humidity: ""
	}

	componentWillMount() {
		let api_url = "http://api.openweathermap.org/data/2.5/weather?"
		let api_key = "0997af5b9449c9c472cfe9cc4d1d8895"
 		fetch("http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,uk&units=metric&appid=0997af5b9449c9c472cfe9cc4d1d8895", {
 			method: 'GET',
 		}).then(res => {
 	        res.json().then((data) => {  
 	        this.setState({
 	          temp: data.main.temp,
 	          pressure: data.main.pressure,
 	          humidity: data.main.humidity
 	        });
 	      });
 		});
 	}

	render() {

		const temp = this.state.temp;
		const pressure = this.state.pressure;
		const humidity = this.state.humidity;

    	return (
    		<div>
        		<h2>Temperatura: {temp} C</h2>
        		<h2>Cisnienie: {pressure} hpa</h2>
        		<h2>Wilgotnosc: {humidity} %</h2>
        	</div>
       	);
    }
}
