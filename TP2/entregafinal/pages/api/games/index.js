// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import games from '../../../data/games.json'

export default function handler(req, res) {
  if(req.query.search) {
    const getGames = games.filter((g) => g.genre.toLowerCase().includes(req.query.search.toLowerCase()) || g.title.toLowerCase().includes(req.query.search.toLowerCase()));
    res.status(200).json(getGames)
  } else res.status(200).json(games); 
};
    
