'use strict';

import r_product from './r_product.js'
import r_position from './r_position.js'
import r_customer from './r_customer.js'


export default app=>{
	app.use('/page', r_product);
	app.use('/position', r_position);
	app.use('/customer', r_customer);
}
    
