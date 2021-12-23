import express from "express";
import mongoose from "mongoose";
import { MongoURI } from "./config/db";
import * as http from "http";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import cors from "cors";
import profile from "./routes/profile.routes";
import mailRoutes from "./routes/lifted-email.routes";
import listings from "./routes/listing.routes";
import sites from "./routes/sites.routes";
import blogRoutes from "./routes/blog.routes";
import playgrounds from "./routes/playgrounds.routes";
import { ApolloServer, gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const gqlServer = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
gqlServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


dotenv.config();
const app = express();
let server = http.createServer(app);

let PORT = process.env.PORT || 5000;

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected " + MongoURI))
  .catch((err: string) => console.log(err));
  
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options("*", cors());


app.use("/", profile);
app.use("/listings", listings);
app.use("/site", sites);

app.use("/api/mail", mailRoutes);
app.use('/blog', blogRoutes)

app.use("/playgrounds", playgrounds);


server.listen(PORT, () => {
  console.info("Server started on port %s.", PORT);
});
