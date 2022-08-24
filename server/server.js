const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// mongoose
//   .connect(
//     "mongodb+srv://anon:linky@cluster0.psuk6jr.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Mongo connected successfully"))
//   .catch((err) => console.log("Error", err));

// const schema = buildSchema(`
//     type Query {
//     name: String
//   }
//   `);
// const rootValue = {
//   name: () => {
//     return "";
//   },
// };
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

// Express server
const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
// have to comment this code out to get the playground to load
//add the build line in again
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// Start the Apollo server
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware

  server.applyMiddleware({ app, path: "/graphql" });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        // log where we can go to test our GQL API
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//     rootValue,
//   })
// );

app.get("/", (req, res) => {
  res.send("Hello from the backend app.js");
});

app.listen(4000, () => {
  console.log("Server on port 4000  ");
});
