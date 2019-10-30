import { App } from './app';
import { ApolloServer, IResolvers } from 'apollo-server-express'; 

/**
 * CREATE A INSTACE OF APOLLO SERVER
 */
const typeDefs = undefined;
const resolvers: IResolvers<any, any> = {};
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

/**
 * CONFIG PORT AND INIT THE APP
 */
const PORT = process.env.PORT || 3000;
const app = new App().app;

/**
 * CONFIG EXPRESS APLLICATION WITH APOLLO SERVER
 */
apolloServer.applyMiddleware({ app });


/**
 * RUN THE APP
 */
app.listen(PORT, () => console.log(`Apolo GraphQL server is running on port ${PORT}`));