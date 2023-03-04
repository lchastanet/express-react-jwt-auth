const db = require("./db.js");

const findOne = async (userId) => {
  try {
    const [user] = await db.query("select * from `user` where id = ?", [
      userId,
    ]);

    return user;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const findByEmail = async (email) => {
  try {
    const [user] = await db.query("select * from `user` where email = ?", [
      email,
    ]);

    return user;
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

const addOne = async (user) => {
  try {
    const { name, email, password } = user;

    const [result] = await db.query(
      "insert into `user` (name, email, password) values (?, ?, ?)",
      [name, email, password]
    );

    return { id: result.insertId, name, email };
  } catch (e) {
    console.log(e);
    throw new SQLGenericError();
  }
};

module.exports = { findOne, addOne, findByEmail };
