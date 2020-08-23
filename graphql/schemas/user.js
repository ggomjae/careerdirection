const types = `
  type User {
    uno: Int!
    name: String!
    password: String!
    email: String!
    roles: [String!]!
  }
  type Token{
    email: String!
    sub: String!
  }
  input SignupInput {
    name: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

const queries = `
    userList: [User]!
    me: User!
`;

const mutations = `
    signup(signupInput: SignupInput!): Boolean!
    login(loginInput: LoginInput!): String!
    verifytoken(token: String!): Token!
`;

module.exports = {
    types,
    queries,
    mutations
};