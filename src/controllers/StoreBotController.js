const Chat = async (message) => {
  return {
    items: [
      {
        id: 'ghfghfghfhgfh',
        content: `em que posso lhe ajudar ${message.user.name}`,
        user: message.user,
      },
    ],
    totalItems: 1,
  };
};

module.exports = { Chat };
