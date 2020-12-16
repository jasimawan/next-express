const { config } = require('dotenv');
const { join } = require('path');
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const connectToMongoDb = require('./config/database');
const typeDefs = require('./graphql/typedef');
const resolvers = require('./graphql/resolvers');
config({ path: join(__dirname, '../.env') });
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    connectToMongoDb(mongoose);
    server.applyMiddleware({ app, path: '/graphql' });

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Express Ready on http://localhost:3000');
      console.log('> Apollo Ready on http://localhost:3000/graphql');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
