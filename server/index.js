const { config } = require('dotenv');
const { join } = require('path');
const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const connectToMongoDb = require('./config/database');
const typeDefs = require('./graphql/typedef');
const resolvers = require('./graphql/resolvers');
const getUserFromJwt = require('./utils/getUserFromJwt');
config({ path: join(__dirname, '../.env') });
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
        const app = express();
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: ({ req, ...rest }) => {
                const token = req.headers.authorization || '';
                if (token) {
                    const { id } = getUserFromJwt(token);
                    return { id, rest };
                }
                return rest;
            }
        });
        connectToMongoDb();
        server.applyMiddleware({ app, path: '/graphql' });

        app.get('*', (req, res) => {
            return handle(req, res);
        });

        app.listen(process.env.PORT, (err) => {
            if (err) throw err;
            console.log(
                `> Express Ready on http://localhost:${process.env.PORT}`
            );
            console.log(
                `> Apollo Ready on http://localhost:${process.env.PORT}/graphql`
            );
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
