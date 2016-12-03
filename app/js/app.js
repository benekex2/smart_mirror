import React from 'react'
import ReactDOM from 'react-dom'

import '../css/app.css'

import { Weather } from "./components/weather.js"
import { Clock } from "./components/clock.js"
import { News } from "./components/news.js"

export class App extends React.Component {
   render() {
     return (
        <div className="container">
        	<div className="weather component">
        		<Clock name="CityRow" UTCOffset="1"/>
        		<Weather />
        		<News />
        	</div>
        </div>
       );
    }
 }


ReactDOM.render(
	<App />, document.getElementById('root')
);