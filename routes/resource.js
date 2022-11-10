var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var peacock_controller = require('../controllers/peacock'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// PEACOCK ROUTES /// 
 
// POST request for creating a Peacock.  
router.post('/peacocks', peacock_controller.peacock_create_post); 
 
// DELETE request to delete Peacock. 
router.delete('/peacocks/:id', peacock_controller.peacock_delete); 
 
// PUT request to update Peacock. 
router.put('/peacocks/:id', peacock_controller.peacock_update_put); 
 
// GET request for one Peacock. 
router.get('/peacocks/:id', peacock_controller.peacock_detail); 
 
// GET request for list of all Peacock items. 
router.get('/peacocks', peacock_controller.peacock_list); 
 
module.exports = router; 
 