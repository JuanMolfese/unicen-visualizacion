import games from '../../../data/games.json'

const getgame = id => games.find(n => n.id === parseInt(id))

export default function handler(req, res) {
  res.status(200).json(getgame(req.query.id));
};