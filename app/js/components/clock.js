import React from 'react'
import moment from 'moment' 

export class Clock extends React.Component {

	setTime(){
  
  	const currentdate = new Date();
  	let hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);    

      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      let minutes = currentdate.getUTCMinutes();
	  
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

      let seconds = currentdate.getUTCSeconds();

      seconds = seconds + "";
      if( seconds.length == 1 ){ seconds = "0" + seconds; }

      const date = moment().format('dddd, LL');

      this.setState({
      	hours: hours,
        minutes: minutes,
        seconds: seconds,
        date: date
      });
  }

  componentWillMount(){
  	this.setTime();
  }

  componentDidMount(){
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  }

	render() {

		
		
		return (
			<div className="city-row" ref="cityRow">
            <h2>{this.state.date}</h2>
		        <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
		    </div>
	   	);
	}
}
