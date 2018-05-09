'use strict';

import Location from './location.js'

// export default app => {
//     // app.get('/test',router.test);
//     app.get('/sql',Location.sql);
// }

export.router=function (app) {
    app.get('/sql',Location.sql);
}
    
