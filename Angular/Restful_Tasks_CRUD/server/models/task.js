
let mongoose = require('mongoose');
// add  bcrypt,unique,moment..

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: 'Please Enter a title' }, 
    description: {type: String, required: 'Please Enter a description'},
    completed: {type: Boolean, required: 'Please Enter Task Status'}
  }, {timestamps: true});
  //var User = mongoose.model('User', PersonSchema);

  TaskSchema.methods = {
    // custom functions
  };

  TaskSchema.pre('save', function(next) {
      // pre SAVE functions
      // like bcrypt...
      next();
  });


  module.exports = mongoose.model('Task',TaskSchema); 
