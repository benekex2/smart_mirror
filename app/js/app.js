import React from 'react'
import ReactDOM from 'react-dom'

import '../css/app.css'

import { Weather } from "./components/weather.js"

export class App extends React.Component {
   render() {
     return (
        <div>
        	<Weather />
        </div>
       );
    }
 }


ReactDOM.render(
	<App />, document.getElementById('root')
);