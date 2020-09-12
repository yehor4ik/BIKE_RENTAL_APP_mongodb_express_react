module.exports = app => {
    const bikes = require("../controllers/bike.controller.js");

    var router = require("express").Router();

    router.post("/", bikes.create);

    router.get("/", bikes.findAll);

    router.delete("/:id", bikes.delete);

    app.use('/api/bikes', router);
}