var express = require('express');
var router = express.Router();
var fs = require('fs')
/* GET home page. */
router.get('/:key', function(req, res, next) {
  let key = req.params.key;
  let router = `public/term/convertPDF/${key}`;
  let chile;
  if (fs.existsSync(router)) {
    chile = fs.readdirSync(router)
  } else {
    res.status(404)
  }
  res.json(chile);
});

module.exports = router;
