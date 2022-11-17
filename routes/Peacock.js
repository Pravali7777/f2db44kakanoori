// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Peacock', { title: 'Search Results' });
// });
// module.exports = router;

var express = require('express'); 
const peacock_controlers= require('../controllers/peacock'); 
var router = express.Router(); 
 
/* GET peacocks */ 
router.get('/', peacock_controlers.peacock_view_all_Page ); 
module.exports = router; 

/* GET detail peacock page */ 
router.get('/detail', peacock_controlers.peacock_view_one_Page);

/* GET create peacock page */ 
router.get('/create', peacock_controlers.peacock_create_Page); 

/* GET create update page */ 
router.get('/update', peacock_controlers.peacock_update_Page);  

 /* GET delete peacock page */ 
router.get('/delete', peacock_controlers.peacock_delete_Page); 
 