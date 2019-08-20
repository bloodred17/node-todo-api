// const MongoClient = require('mongodb').MongoClient;
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //Add data
    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users (name, age, location)
    db.collection('Users').insertOne({
        name: "Ankur",
        age: 24,
        location: "Bengaluru"
    }, (error, result) => {
        if(err){
            return console.log("Unable to insert user", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //Close the database
    client.close();
});