import { gql } from 'apollo-server-express';
import StoreBotController from '../../controllers/StoreBotController';

export const typeDefs = gql`
  type MessageUser implements Node {
    id: ID!
    name: String!
  }

  type Message implements Node {
    id: ID!
    content: String!
    user: MessageUser!
  }

  type Chat implements List {
    items: [Message!]!
    totalItems: Int!
  }

  input User {
    id: String!
    name: String!
  }

  input ChatOptions {
    content: String!
    user: User!
  }

  extend type Query {
    chat(options: ChatOptions): Chat
  }
`;

export const resolvers = {
  Query: {
    chat: async (_, args) => {
      return await StoreBotController.Chat(args.options);
    },
  },
};
