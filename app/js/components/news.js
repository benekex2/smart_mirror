import React from 'react'
import moment from 'moment'	


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
		const logo = this.props.image;
		
    	return (
    		<div>
    			<ul>
        		{newsList ? (newsList.map((item, index) => {
        				if(index < 2) {
        					const publishedAt = moment(item.publishedAt).format('MMMM Do YYYY, hh:mm');
							return (
								<li key={index}>
									<div className="image">
										<img src={logo} width="100" />
									</div>
									<div className="description">
										<h3>{item.title} - {publishedAt}</h3>
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