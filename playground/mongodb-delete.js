//object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    //     console.log(doc);
    // });

    db.collection('Users').deleteMany({name: "Ankur"}).then((result) => {
        console.log(`Duplicates deleted: ${(result.result.n)?true:false}`);
    });
    db.collection('Users').deleteOne({_id: new ObjectID('5d5b69a381b1e7ed6424d5da')}).then((result) => {
        console.log(`Specific user deleted: ${(result.result.n)?true:false}`);
    });

    //Close the database
    // client.close();`
});