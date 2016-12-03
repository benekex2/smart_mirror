import React from 'react'
import moment from 'moment'	

export class News extends React.Component {

	state = {
		newsList: []
	}

	getData() {

 		fetch("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=31c1148589434885b3c16370b76e74bf", {
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


	render() {

		const newsList = this.state.newsList;
		
    	return (
    		<div>
    			<ul>
        		{newsList ? (newsList.map((item, index) => {
						return (
							<li key={index}>
								<p>{item.author} - {item.publishedAt}</p>
								<p>{item.title}</p>
								<p>{item.description}</p>
							</li>
						);
					})
				) : (null)}
				</ul>
        	</div>
       	);
    }
}