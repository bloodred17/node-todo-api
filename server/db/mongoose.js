var mongoose = require ('mongoose');

//set 'default node Promise' as the promise for mongoose
mongoose.Promise = global.Promise; 

//connect to mongodb server and maintain connection
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};