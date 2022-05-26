// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import games from '../../../data/games.json'

export default function handler(req, res) {
  res.status(200).json(games);
};
    
