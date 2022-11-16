var Peacock = require('../models/peacock'); 
 
// List of all Peacock 
exports.peacock_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Peacock list'); 
}; 
 
// for a specific Costume. 
exports.peacock_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Peacock.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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

// Handle Costume update form on PUT. 
exports.peacock_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Peacock.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.feathers)  
               toUpdate.feathers = req.body.feathers; 
        if(req.body.legs) toUpdate.cost = req.body.legs; 
        if(req.body.gender) toUpdate.gender = req.body.gender; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Peacock delete on DELETE. 
exports.peacock_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Peacock.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.peacock_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Peacock.findById( req.query.id) 
        res.render('peacockdetail',  
{ title: 'Peacock Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a peacock. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.peacock_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('peacockcreate', { title: 'Peacock Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 