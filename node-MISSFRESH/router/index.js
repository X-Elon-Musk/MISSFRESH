'use strict';

import r_page from './r_page.js'
import r_position from './r_position.js'


export default app=>{
	app.use('/page', r_page);
	app.use('/position', r_position);
}
    
