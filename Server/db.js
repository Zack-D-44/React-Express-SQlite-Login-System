const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const sqlite3Promise = require("sqlite3");
// we need to use a promise-based API for sqlite3
// Opens database
const dbPromise = open({
  filename: "./users.sqlite",
  driver: sqlite3Promise.Database,
});

const authenticateUser = async (username, password) => {
  try {
    const db = await dbPromise;
    const row = await db.get(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (row) {
      // User exists
      return true;
    } else {
      // User does not exist
      return false;
    }
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be caught by the caller
  }
};

module.exports = authenticateUser;
