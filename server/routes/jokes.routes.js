const JokesController = require('../controllers/jokes.controllers');
   
module.exports = app => {
    app.post('/api/addNewJoke', JokesController.createJoke);
    app.get('/api/getAllJokes', JokesController.getAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneSingleJoke);
    app.get("/api/jokes/random", JokesController.findOneSingleJokeRandom);
    app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke);
  };