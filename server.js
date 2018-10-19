const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({ schema: schema }));

app.listen(PORT, () => console.log(`Server listening on PORT::${PORT}`));
