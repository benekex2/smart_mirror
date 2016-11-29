import React from 'react'	

export class Weather extends React.Component {

	state = {
		data: []
	}

	componentWillMount() {
 		fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0997af5b9449c9c472cfe9cc4d1d8895", {
 			method: 'GET',
 		}).then(res => {
 	        res.json().then((data) => {  
 	        this.setState({
 	          data: data
 	        });
 	      });
 		});
 	}

	render() {

		console.log(this.state.data);

    	return (
        	<h2>Test</h2>
       	);
    }
}
