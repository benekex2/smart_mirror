import React from 'react'
import ReactDOM from 'react-dom'

import '../css/app.css'
import '../css/weather-icons.css'

import { Weather } from "./components/weather.js"
import { Clock } from "./components/clock.js"
import { News } from "./components/news.js"

export class App extends React.Component {
   render() {
     return (
        <div className="container">
        	<header>
	        	<div className="clock component">
	        		
	        		<Clock name="CityRow" UTCOffset="1"/>
	        	</div>
	        	<div className="weather component">
	        		<Weather />
	        	</div>
        	</header>
        	<footer>
	        	
        	</footer>
        </div>
       );
    }
 }


ReactDOM.render(
	<App />, document.getElementById('root')
);