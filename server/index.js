import { startApoloServer } from './app.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js'

startApoloServer(typeDefs, resolvers);