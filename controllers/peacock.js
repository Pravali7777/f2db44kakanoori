var Peacock = require('../models/peacock'); 
 
// List of all Peacock 
exports.peacock_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock list'); 
}; 
 
// for a specific Peacock. 
exports.peacock_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock detail: ' + req.params.id); 
}; 
 
// Handle Peacock create on POST. 
exports.peacock_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock create POST'); 
}; 
 
// Handle Peacock delete form on DELETE. 
exports.peacock_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock delete DELETE ' + req.params.id); 
}; 
 
// Handle Peacock update form on PUT. 
exports.peacock_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock update PUT' + req.params.id); 
}; 