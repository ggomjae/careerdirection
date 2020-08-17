const userResolver = require('./user');

const resolvers = {
  Query: {
    ...userResolver.queries
  },
  Mutation: {
    ...userResolver.mutations
  }
};

module.exports = {
  resolvers
};