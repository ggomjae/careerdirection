const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// User List Method 
const userList = () => {
  return new Promise((resolve, reject) => {
    User.findAll({})
      .then((users) => {
        resolve(users);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// User signup Method 
const signup = (parent, { signupInput: {name, email, password} })=> {
  
  return new Promise((resolve, reject) => {
    
    User.findOne({where : { 'email' : email }})
    .then((user) => {
      if(user){
        resolve(false);
      }
    })
    .catch((err) => {
      reject(err);
    })
    
    bcrypt.hash(password, saltRounds, function(err, passwordHash) {
      
      const newUser = {
        'name' : name,
        'password' : passwordHash,
        'email' : email,
        'roles': "user"
      }

      User.create(newUser)
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}


module.exports = {
  userList,
  signup
}