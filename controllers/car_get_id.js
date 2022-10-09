const { Cars } = require("../models")

module.exports = async (req, res) => {
    let cars = await Cars.findOne({
        where: { id: req.params.id }
    });

    res.json(cars);
}
