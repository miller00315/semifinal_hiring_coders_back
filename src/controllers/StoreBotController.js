import { v4 as uuidv4 } from 'uuid';

const Chat = async (message) => {
  const items = [];

  if (message.content === 'initial') {
    items.push({
      id: uuidv4(),
      content: 'Bem vindo ao nosso chat',
      user: {
        name: 'StoreBot',
        id: 'id_bot_store',
      },
    });
  } else {
    //Processa a mensagem
    items.push({
      id: uuidv4(),
      content: 'Reposta api',
      user: {
        name: 'StoreBot',
        id: 'id_bot_store',
      },
    });
  }

  return {
    items,
    totalItems: items.length,
  };
};

export default { Chat };
