const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const PORT = 3000;

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const app = express();

let server = null;
async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    server.applyMiddleware({ app });
    
    app.listen({ port: PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    })
}

startServer();