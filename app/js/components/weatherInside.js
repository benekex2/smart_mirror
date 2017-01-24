import React from 'react'

export class WeatherInside extends React.Component {

	state = {
		tempI: '',
		humI: ''
	}
	
	getData() {

		const temp = require('../../../sensor-values/temperature_living-room_latest_value.csv');
		const humidity = require('../../../sensor-values/humidity_living-room_latest_value.csv');
		console.log(temp[1][1]);

		delete require.cache;

		this.setState({
          tempI: temp[1][1],
          humI: humidity[1][1]
        });

	}

	componentWillMount() {
		this.getData();
 	}

 	componentDidMount(){
	  	window.setInterval(function () {
	    	this.forceUpdate();
	    }.bind(this), 6000);
  	}

  	render() {
  		const tempI = this.state.tempI;
		const humidityI = this.state.tempI;
		
  		return(
  			<div className="weatherInside">
  				<i className="additional wi wi-thermometer"></i>
				<span>{tempI} &#176;C</span>
				<i className="additional wi wi-humidity"></i>
				<span>{humidityI} %</span>
  			</div>
  		);
  	}


}