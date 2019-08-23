// var mongoose = require ('mongoose');

// //set 'default node Promise' as the promise for mongoose
// mongoose.Promise = global.Promise; 

// //connect to mongodb server and maintain connection
// mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose model to let mongoose know how to store data

// var Todo = mongoose.model('Todos', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

//creating an instance of data model
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

//Challenge
// var newTodo = new Todo({
//     text: 'Learn mongoose',
//     // completed: false,
//     // completedAt: new Date()
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

// var User = mongoose.model('Users', {
//     email: {
//         type: String,
//         requierd: true,
//         trim: true,
//         minlength: 5
//     }
// });

// var newUser = new User({
//     email: "ankur.611@gmail.com"
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log("Unable to save User data",e);
// });


//Library imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};