import { gql } from 'apollo-server-express';

import { typeDefs as nodeTypeDef } from './Node/Node';
import { typeDefs as lisTypeDefs } from './List/List';
import { typeDefs as storeBotDefs } from './StoreBot/StoreBot';

const typeDefs = gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  ${nodeTypeDef}
  ${lisTypeDefs}
  ${storeBotDefs}
`;

export default typeDefs;
