"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./config/db");
const http = __importStar(require("http"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const lifted_email_routes_1 = __importDefault(require("./routes/lifted-email.routes"));
const listing_routes_1 = __importDefault(require("./routes/listing.routes"));
const sites_routes_1 = __importDefault(require("./routes/sites.routes"));
const blog_routes_1 = __importDefault(require("./routes/blog.routes"));
const playgrounds_routes_1 = __importDefault(require("./routes/playgrounds.routes"));
const apollo_server_1 = require("apollo-server");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = (0, apollo_server_1.gql) `
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
const gqlServer = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
gqlServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
dotenv.config();
const app = (0, express_1.default)();
let server = http.createServer(app);
let PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(db_1.MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected " + db_1.MongoURI))
    .catch((err) => console.log(err));
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
app.use("/", profile_routes_1.default);
app.use("/listings", listing_routes_1.default);
app.use("/site", sites_routes_1.default);
app.use("/api/mail", lifted_email_routes_1.default);
app.use('/blog', blog_routes_1.default);
app.use("/playgrounds", playgrounds_routes_1.default);
server.listen(process.env.PORT || 5000, () => {
    console.info("Server started on port %s.", process.env.PORT || 5000);
});
