let baseUrl = '';


if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://localhost:3396';
}else if(process.env.NODE_ENV == 'production'){
	// baseUrl = '';
}

export{
	baseUrl
}