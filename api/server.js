const express = require("express");

const Tvshows = require("../tvshows/tvshowsModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.get("/shows", (req, res) => {
    Tvshows.getShows()
        .then((shows) => {
            res.status(200).json(shows);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "error getting shows" });
      });
  });
  
server.get("/shows/:id", (req, res) => {
    const { id } = req.params;
    Tvshows.getById({ id })
        .then((show) => {
            res.status(200).json(show);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "error getting id" });
        });
});

server.delete("/shows/:id", (req, res) => {
    const { id } = req.params;
    Tvshows.removeShow({ id })
        .then((show) => {
            res.status(200).json({ message: "show has been removed" });
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "error removing a show" });
        });
});
  
server.post("/shows", (req, res) => {
    const newShow = req.body;
    Tvshows.addShow(newShow)
        .then((show) => {
            res.status(201).json(req.body);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "error adding a show" });
        });
});

module.exports = server;