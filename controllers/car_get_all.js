const { Cars } = require("../models")

module.exports = async (req, res) => {
    let cars = await Cars.findAll();

    res.json(cars);
}
