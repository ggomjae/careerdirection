const { gql } = require('apollo-server');

const userSchema = require('./user');

const typeDefs = gql`
    
    ${userSchema.types}
    
    type Query {
       
        ${userSchema.queries}
    }

    type Mutation {
      
        ${userSchema.mutations}
    }
`

module.exports = {
    typeDefs
};