const { Cars } = require("../models");

async function carDelete(req, res) {
  let idFromParams = req.params.id;

  let arrayId = [];
  let splitId = idFromParams.split("");

  for (let i in splitId) {
    if (splitId[i] != ":") {
      arrayId.push(splitId[i]);
    }
  }
  let finalId = arrayId.join("");
  console.log(finalId);

  let car = await Cars.findAll();

  let array = [];
  for (let i in car) {
    if (finalId == car[i].id) {
      array.push(car[i].id);
    }
  }

  if (array.length == 0) {
    console.log(`Data ${finalId} Tidak Ada`);
    res.json(`Data ${finalId} Tidak Ada`);
  } else {
    await Cars.destroy({ where: { id: finalId } });
    res.json(`Data ${finalId} Berhasil Dihapus`);
  }
}

module.exports = carDelete;
