const userQuestion = async function (req, res) {
  const { question } = req.query;

  console.log(question);

  return res.status(200).json({ response: 'Olá, tudo bem' });
};

const invalidRoute = async function (_, res, next) {
  res.status('404').json({ message: 'Rota inexistente' });
};

module.exports = {
  userQuestion,
  invalidRoute,
};
