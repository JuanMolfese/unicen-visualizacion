
export default function handler(req, res) {
  res.status(200).json({
    categories: [
      {
        id: 1,
        name: 'Action',
      },
      {
        id: 2,
        name: 'Adventure',
      },
      {
        id: 3,
        name: 'Casual',
      },
      {
        id: 4,
        name: 'Indie',
      },
      {
        id: 5,
        name: 'Massively Multiplayer',
      },
      {
        id: 6,
        name: 'Racing',
      },
  
    ]});
}