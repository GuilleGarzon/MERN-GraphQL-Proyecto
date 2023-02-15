import { startApoloServer } from './app.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import { connectDB } from './database.js';

connectDB();

startApoloServer(typeDefs, resolvers);