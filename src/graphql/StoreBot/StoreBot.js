import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Message implements Node {
    id: ID!
    text: String!
    user: String!
  }

  type Chat implements List {
    items: [Message!]!
    totalItems: Int!
  }

  input ChatOptions {
    id: ID!
  }

  extend type Query {
    chat(options: ChatOptions): Chat
  }
`;

export const resolvers = {
  Query: {
    chat: async (_, args) => {
      console.log(args.options.id);
      return {
        items: [
          {
            id: 'ghfghfghfhgfh',
            text: 'em que posso lhe ajudar',
            user: 'Miller',
          },
        ],
        totalItems: 1,
      };
    },
  },
};
