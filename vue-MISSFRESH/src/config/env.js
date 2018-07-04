let baseUrl = '';


if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://localhost:3390';
}else if(process.env.NODE_ENV == 'production'){
	// baseUrl = 'http://cangdu.org:8001';
}

export{
	baseUrl
}