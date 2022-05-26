import games from '../../../data/games.json'

/* const getgame = name => games.find(n => n.genre === name); */
/* const getGames = name => games.filter(n => n.genre === name); */


export default function handler(req, res) {
  const getGames = games.filter((g) => g.genre === req.query.name)
  res.status(200).json(getGames);
};