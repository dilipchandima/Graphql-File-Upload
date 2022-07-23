const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
const typeDefs = require("./schema");

const resolvers = require("./resolvers");
var cors = require("cors");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Using graphql-upload without CSRF prevention is very insecure.
    // csrfPrevention: true,
    cache: "bounded",
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(cors());
  // app.get("/", function (req, res, next) {
  //   res.json({ msg: "This is CORS-enabled for all origins!" });
  // });
  app.use(graphqlUploadExpress());
  app.use(express.static("public"));

  server.applyMiddleware({ app });

  await new Promise((r) => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();
