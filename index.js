const port = 3000;
const dbConfig = require('./config/database')
const db = require('./models');

//apollo server
const { ApolloServer } = require('apollo-server');

// database + sequelize 
const connection = dbConfig.init();
dbConfig.connect(connection);

//sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행.
db.sequelize.sync();

/* router + express server 
const express = require('express')
const app = express();

app.use('/api/user', require('./routes/user'));
app.listen(port, () => {
  console.log('Start Server');
});  
 */

const { typeDefs } = require('./graphql/schemas');
const { resolvers } = require('./graphql/resolvers');
const { context } = require('./graphql/context/context');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});