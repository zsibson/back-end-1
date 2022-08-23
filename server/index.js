const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Spencer", "Eric", "Brooke", "Justin", "Jake"];
    res.status(200).send(friends);
});

app.get("/weather/: temperature", (req, res) => {
    let phrase = `<h3> It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
});


app.listen(4000, () => console.log("Server running on port 4000"));
