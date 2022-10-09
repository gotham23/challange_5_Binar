const { Cars } = require("../models");

async function carPut(req, res) {
  let idFromParams = req.params.id;
  let arrayId = [];
  let splitId = idFromParams.split("");

  for (let i in splitId) {
    if (splitId[i] != ":") {
      arrayId.push(splitId[i]);
    }
  }
  let finalId = arrayId.join("");

  await Cars.update(
    {
      name: req.body.name,
      price: req.body.price,
      size_id: req.body.size_id,
      photo: req.body.photo,
    },
    { where: { id: finalId } }
  );

  res.send(`Data berhasil diupdate `);
}

module.exports = carPut;
