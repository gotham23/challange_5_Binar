const fs = require("fs");
function carUpload(req, res) {
  let result = {};
  if (req.file) {
    let originalname = req.file.originalname;
    let temporary = req.file.path;
    fs.copyFileSync(temporary, `upload/${originalname}`);
    fs.unlinkSync(temporary);
    result.url = `${originalname}`;
  }
  res.json(result);
}

module.exports = carUpload;
