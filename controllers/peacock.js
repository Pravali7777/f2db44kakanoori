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
// List of all Peacocks 
exports.peacock_list = async function(req, res) { 
    try{ 
        thePeacocks = await Peacock.find(); 
        res.send(thePeacocks); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.peacock_view_all_Page = async function(req, res) { 
    try{ 
        thePeacocks = await Peacock.find(); 
        res.render('peacock', { title: 'Peacock Search Results', results: thePeacocks }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Peacock create on POST. 
exports.peacock_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Peacock(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"peacock_type":"goat", "cost":12, "size":"large"} 
    document.feathers = req.body.feathers; 
    document.legs = req.body.legs; 
    document.gender = req.body.gender; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 