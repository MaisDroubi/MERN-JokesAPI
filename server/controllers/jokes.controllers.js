const Joke = require("../models/jokes.model");

module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(product => response.json(joke))
        .catch(err => response.json(err));
}


module.exports.getAllJokes = (request, response) => {
   response.json(Joke.find())
}

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneSingleJokeRandom = (req, res) => {
	Joke.aggregate().sample(1)
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke=> res.json({ user: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};