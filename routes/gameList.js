// library
const express = require('express');
const router = express.Router();

// TODO: envファイルを用意
router.get('/', (req, res) => {  
  res.status(200).json({
    gameList: [
      {
        gameTitle: 'Megaman 8',
        gameId: 'megaman8',
        status: 'played',
        console: 'playstation',
        imageUrl: '/images/playstation/games/megaman8.png'
      },
      {
        gameTitle: 'Megaman 2',
        gameId: 'megaman2',
        status: 'completed',
        console: 'Nintendo',
        imageUrl: '/images/playstation/games/megaman2.png'
      }
    ]
  });
});

module.exports = router;

