const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Article = require('./resolvers/Article')
const Paragraph = require('./resolvers/Paragraph')

const resolvers = {
  Query,
  Mutation,
  Article,
  Paragraph
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  })
})

const options = {
  port: process.env.PORT || 4000,
}

server.start(options, ({port}) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)