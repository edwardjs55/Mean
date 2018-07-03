

var Task = require('../models/task');

module.exports = {

index: (req, res) => {    //Get ALL Records
    Task.find({}).exec((err,data) => {
        if(err){
            console.log("errors:",err);
            return res.status(400).json(err);
        }
        else {
           return res.json(data);
        }
    });
},

get: (req,res) => {
    Task.findById(req.params.id, (err,data) => {
        if(err){
            console.log("errors:",err);
            return res.status(400).json(err);
        }
        else {
           return res.json(data);
        }
    });
},

create: (req,res) => {
    console.log("Creating Stuff");
    var task = new Task(req.body);
    console.log('task:',task);
    task.save( (err) => {
        console.log('in save');
        if(err){
            console.log("errors:",err);
            return res.status(400).json(err);
        }
        else {
           return res.json(task);
        }
    });
},

update: (req,res) => {
    Task.findByIdAndUpdate(req.params.id,req.body, (err,data) =>{
        if(err){
            console.log("errors:",err);
            return res.status(400).json(err);
        }
        else {
           return res.json(data);
        }
    });
},

delete: (req,res) => {
    Task.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            console.log("errors:",err);
            return res.status(400).json(err);
        }
        else {
           return res.json("Deleted");
        }
    });
}

};