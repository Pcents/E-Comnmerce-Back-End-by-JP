const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
// THEN I am able to connect to a database using Sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("We here you"));
});
// sync sequelize models to the database, then turn on the server
// this was included with the original code
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// WHEN I enter schema and seed commands
// THEN a development database is created and is seeded with test data
// mysql source schema.sql
// the seed command npm run seed-need to add? "seed": "node seeds/index.js"

// WHEN I enter the command to invoke the application
// THEN my server is started and the Sequelize models are synced to the MySQL database
// npm start? npm run develop = nodemon

// WHEN I open API GET routes in Insomnia for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON
// need to do routes in category, product, tag

// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete data in my database
// as above
