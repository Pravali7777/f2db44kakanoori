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