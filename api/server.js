const express = require('express');
const db = require('../games/games-model.js');

const server = express();

server.use(express.json());

//sanity check 
server.get('/', (req, res) => {
      res.status(200).json({ message: "oh, hey!"})
      
      })
      .get('/games', async (req, res) => {
            try {
                  const games = await db.get('games')
                  res.status(200).json(games)
            } catch (error) {
                  console.log(error);
                  res.status(500).json(error)
            }
      })
      .post('/games', async (req, res) => {
            const game = req.body
            if(!game.title || !game.genre){
                  return res.status(422).json({message: 'sorry, title and genre are required'});  
            } 
            try {
                  const newGame = await db.add(game)
                  res.status(201).json({ message: 'good game.'})
            } catch (error) {
                  console.log(error);
                  res.status(500).json({ error: 'sorry, we failed adding that to the database'});
            }
            
      })
      .delete('/games/:id', (req, res) => {
            const id = req.params.id;
            db.remove(id)
                  .then(count => {
                        if(count > 0) {
                              res.status(204).json({ message: 'like it never happened.'})
                        } else {
                              res.status(404).json({ message: "that's not even a thing. "})
                        }
                  })
                  .catch(err => {
                        res.status(500).json(err)
                  })
      })


module.exports = server;