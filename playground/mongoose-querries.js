const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo id
// var id = '5d5f9028fc937242b03739d9';

//User  id
var id = '5d5f977248242c5cd2377056';

//Test id
// var id = '6d5f9028fc937242b03739d';

if(!ObjectID.isValid(id)){
    console.log("ID NOT VALID!");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos - find', todos);
// });
// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     console.log('Todo - findOne', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo - findById', todo);
// }).catch((e) => console.log(e.message));

User.findById(id).then((user) => {
    if(!user){
        return console.log('ID NOT FOUND!');
    }
    console.log('User: ');
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e.message));