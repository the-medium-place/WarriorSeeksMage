// Dependencies
// =============================================================
var express = require("express");
const cors = require("cors");
const db = require("./models");
require('dotenv').config();

const MOCK_USERS = require('./mock_data/MOCK_USERS.json');
const MOCK_PARTIES = require('./mock_data/MOCK_PARTIES.json');

console.log("env vars\n========================");
console.log("ID: ",process.env.BGA_CLIENT_ID)
console.log("secret: ",process.env.BGA_CLIENT_SECRET);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const CORS_ORIGIN = "http://localhost:3000";
app.use(cors({
  origin: [CORS_ORIGIN],
  credentials: true
}));


app.get("/", (req,res) => {
 res.json("API Splash!")
})

app.get('/seedparties', (req,res) => {
  db.Party.bulkCreate(MOCK_PARTIES)
  .then(data => {
    res.send('bulk PARTY data created')
  })
  .catch(err => console.log(err))
})

app.get('/seedusers', (req,res) => {
  db.User.bulkCreate(MOCK_USERS)
  .then(data => {
    res.send('bulk USER data created')
  })
  .catch(err => console.log(err))
})






const userRoutes = require("./routes/userRoutes");
const partyRoutes = require("./routes/partyRoutes");

app.use(userRoutes);
app.use(partyRoutes);



// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});