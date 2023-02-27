const { findAll, findOne } = require("../model/movie.model.js");

const getAll = async (req, res) => {
  try {
    const movies = await findAll();

    res.send(movies);
  } catch (e) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);

    if (isNaN(movieId)) throw new Error();

    const [movies] = await findOne(movieId);

    res.send(movies);
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne };
