This is the server of the GraphQL article [repository](https://github.com/bdebever/graphql-mini-articles)

## Architecture

We have the following directories:
- `prisma`: This directory holds all the files that relate to tge Prisma and database setup. Prisma is used as a replacement for a traditional ORM and is responsible for accessing the database (using the Prisma client).
- `src`: This directory holds the source files for the GraphQL server.
    - `schema.graphql` contains your GraphQL schema.
    - `resolvers` contains the resolver functions for the operations defined in the GraphQL schema.
    - `index.js` is the entry point for your GraphQL server.
