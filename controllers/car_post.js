const { Cars } = require("../models")

async function carPost(req, res) {
    let car = await Cars.create({
        name: req.body.name,
        price: req.body.price,
        size_id: req.body.size_id,
        photo: req.body.photo,
    });

    res.json(car);
}

module.exports = carPost;