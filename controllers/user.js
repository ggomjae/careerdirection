const userService = require('../services/user');

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

/////////////////////////////////////////
//               GraphQL               //
/////////////////////////////////////////

// user list method
const userList = ()=> {
  return userService.userList();
}

// user signup method
const signup = (parent, { signupInput: {name, email, password} }) => {
  return userService.signup(parent, { signupInput: {name, email, password} });
}

// user login method
const login = (parent, { loginInput: {email, password} }) => {
  return userService.login(parent, { loginInput: {email, password} });
}

module.exports = {
  userList,
  signup,
  login
}