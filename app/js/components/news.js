import React from 'react'
import moment from 'moment'	

import bbcLogo from '../../images/bbc-logo.jpg'

export class News extends React.Component {

	state = {
		newsList: []
	}

	getData() {

		const apiKey = '31c1148589434885b3c16370b76e74bf';
		const sortBy = 'top';
		const source = this.props.source;

		const url = 'https://newsapi.org/v1/articles?source='+source+'&sortBy='+sortBy+'&apiKey='+apiKey;

 		fetch(url, {
 			method: 'GET',
 		}).then(res => {
 	        res.json().then((data) => {  
 	        this.setState({
 	          newsList: data.articles
 	        });
 	      });
 		});

	}

	componentWillMount() {
		this.getData();
 	}

 	componentDidMount(){
	  	window.setInterval(function () {
	    	this.getData();
	    }.bind(this), 60000);
  	}


	render() {

		const newsList = this.state.newsList;
		
    	return (
    		<div>
    			<ul>
        		{newsList ? (newsList.map((item, index) => {
        				if(index < 3) {
        					const publishedAt = moment(item.publishedAt).format('MMMM Do YYYY, hh:mm');
							return (
								<li key={index}>
									<div className="title">
										<img src={bbcLogo} width="100" />
										<p>
											<span className="left">{item.title}</span>
											<span className="right">{publishedAt}</span>
										</p>
									</div>
									<div className="description">
										<p>{item.description}</p>
									</div>
								</li>
							);
						}
					})
				) : (null)}
				</ul>
        	</div>
       	);
    }
}