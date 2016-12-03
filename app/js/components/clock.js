import React from 'react'
import moment from 'moment'	

export class Clock extends React.Component {

	setTime(){
  
  	var currentdate = new Date();
  	var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);    

      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();
	  
      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

      var seconds = currentdate.getUTCSeconds();

      this.setState({
      	hours: hours,
        minutes: minutes,
        seconds: seconds
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
		        <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
		    </div>
	   	);
	}
}
