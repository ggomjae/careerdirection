const userService = require('../services/user');
const bcrypt = require('bcrypt');

// user list method
const userList = ()=> {
  return userService.userList();
}

/* user list method - express
const userList = (req, res) => {
  userService.userList(req)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
}
*/

// join method
const joinUser = (req,res) => {
  
  bcrypt.hash(password, saltRounds, function(err, passwordHash) {
        
    const newUser = {
        'name' : name,
        'password' : passwordHash,
        'email' : email,
        'role': ['user']
    }

    users.create(newUser)
        .then( (user) => {
            console.log('success', user.toJSON());
        })
        .catch((err) => {
            console.log('fail', err);
    });
});
}

module.exports = {
  userList,
  joinUser
}