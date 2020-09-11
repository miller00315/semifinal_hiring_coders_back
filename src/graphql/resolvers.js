import { resolvers as nodeResolver } from './Node/Node';
import { resolvers as listResolver } from './List/List';
import { resolvers as storeBotResolver } from './StoreBot/StoreBot';

const resolvers = {
  ...nodeResolver,
  ...listResolver,
  ...storeBotResolver,

  Query: {
    ...storeBotResolver.Query,
  },
};

export default resolvers;
