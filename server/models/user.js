var mongoose = require('mongoose');

var User = mongoose.model('Users', {
    email: {
        type: String,
        requierd: true,
        trim: true,
        minlength: 5
    }
});

var newUser = new User({
    email: "ankur.611@gmail.com"
});

module.exports = {User};