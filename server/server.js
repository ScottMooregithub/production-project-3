const proxy = require("express-http-proxy");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const app = express();

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
// const db = require("./config/connection");

// Express server
const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start the Apollo server
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app, path: "/graphql" });

  if (process.env.NODE_ENV === "production") {
    // Only enable this in production
    app.use("/", express.static("../client/build"));
  } else {
    app.use("/", proxy("127.0.0.1:3000"));
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      // log where we can go to test our GQL API
      `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

// Call the async function to start the server
startApolloServer();
