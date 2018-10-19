const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();
const username = 'steveninouye';
const password = 'test123';

mongoose.connect(
    `mongodb://${username}:${password}@ds137003.mlab.com:37003/gql-ninja`
);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
