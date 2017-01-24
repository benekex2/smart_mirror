import React from 'react'
import ReactDOM from 'react-dom'

import '../css/app.css'
import '../css/weather-icons.css'

import { Weather } from "./components/weather.js"
import { Clock } from "./components/clock.js"
import { News } from "./components/news.js"
import { WeatherInside } from "./components/weatherInside.js"

import bbcLogo from '../images/bbc-logo.png'
import cnnLogo from '../images/cnn-logo.png'
import twpLogo from '../images/twp-logo.png'
import twsjLogo from '../images/twsj-logo.png'

export class App extends React.Component {
   render() {
     return (
        <div className="container">
        	<header>
	        	<div className="clock component">
	        		
	        		<Clock name="CityRow" UTCOffset="1"/>
	        		<WeatherInside />
	        	</div>
	        	<div className="weather component">
	        		<Weather />
	        	</div>
        	</header>
        	<footer>
	        	<div className="news component">
	        		<News source="bbc-news" image={bbcLogo} />
	        		<News source="the-washington-post" image={twpLogo} />
	        	</div>
	        	<div className="news component">
	        		<News source="cnn" image={cnnLogo} />
	        		<News source="the-wall-street-journal" image={twsjLogo} />
	        	</div>
        	</footer>
        </div>
       );
    }
 }


ReactDOM.render(
	<App />, document.getElementById('root')
);