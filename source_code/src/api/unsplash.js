import axios from 'axios';


export default axios.create({
	baseURL:'https://api.unsplash.com/',
	headers:{
		Authorization: 'Client-ID sbrhyqzfvVX8-3ZD5IughrauSNo4Pn3lmXIjwcdaXII'
	}	
});