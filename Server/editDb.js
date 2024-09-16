const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./users.sqlite");

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS users");

  db.run(
    "CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, role TEXT)"
  );

  db.run(
    "INSERT INTO users (username, password, role) VALUES ('admin', 'admin', 'admin')"
  );
});
