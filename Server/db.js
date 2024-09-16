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
      // different syntax for placeholders
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

const createUser = async (username, password) => {
  try {
    const db = await dbPromise;
    // insert new user into the table
    await db.run(
      "INSERT INTO users (username, password) VALUES ($username, $password)",
      {
        $username: username,
        $password: password,
      },
      (err) => {
        if (err) {
          // log potential error
          console.log(err);
          throw err;
        }
      }
    );
    // return true that user was added to db
    return true;
  } catch (err) {
    // log errors that arise
    console.log(err);
  }
};

const getTopTenUsers = async () => {
  // array that will hold the results and be sent the the client
  const resultArray = [];

  try {
    // get top ten users by id and push each user to an array
    const db = await dbPromise;
    await db.each(
      "SELECT * FROM users ORDER BY id ASC LIMIT 10",
      (err, row) => {
        if (err) {
          console.log(err);
        }
        resultArray.push(row);
      }
    );
    // return array with results
    return resultArray;
  } catch (error) {
    console.log(error);
  }
};

const getUsersAscendingId = async () => {
  try {
    const db = await dbPromise;
    const result = await db.all("SELECT * FROM users ORDER BY id ASC");
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getUsersDescendingId = async () => {
  try {
    const db = await dbPromise;
    const result = await db.all("SELECT * FROM users ORDER BY id DESC");
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getUsersByUsername = async (username) => {
  try {
    const db = await dbPromise;
    const result = await db.all(
      "SELECT * FROM users WHERE username = $username",
      { $username: username }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  authenticateUser,
  getTopTenUsers,
  getUsersAscendingId,
  getUsersDescendingId,
  getUsersByUsername,
};
