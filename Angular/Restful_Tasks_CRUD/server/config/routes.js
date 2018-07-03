
const mongoose = require('mongoose'),
Task = mongoose.model('Task');
let tasks = require('../controllers/tasks.js');      

module.exports = function(app){

app.get('/tasks',tasks.index); //get all

app.get('/tasks/:id',tasks.get); //Get One

app.post('/tasks',tasks.create); // Create

app.patch('/tasks/:id',tasks.update); // Update

app.delete('/tasks/:id',tasks.delete); // Destroy


// tell the express app to listen on port 8000, always put this at the end of your server.js file
    app.listen(8000, function() {
    console.log("listening on port 8000");
    });
};    

