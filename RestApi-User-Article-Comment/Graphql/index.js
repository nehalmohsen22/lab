const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Wonderful Things You Will Be",
    author: "Emily Winfield Martin",
  },
  {
    title: "It Ends with Us: A Novel (1)",
    author: "Colleen Hoover",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
