const db = require("./db.js");
const { SQLGenericError } = require("../errors/SQLGenericError.js");

const findAll = async () => {
  try {
    const [movies] = await db.query("select * from `movie`");

    return movies;
  } catch (e) {
    console.log(e);
  }
};

const findOne = async (id) => {
  try {
    const [movie] = await db.query("select * from `movie` where id = ?", [id]);

    return movie;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

module.exports = { findAll, findOne };
