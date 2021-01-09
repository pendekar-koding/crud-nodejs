var express = require('express');
var router = express.Router();
var billController = require('../moduls/controller/billing');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

router.get('/', billController.getAll)
router.get('/:id', billController.findByid)
router.post('/', billController.add)
router.put('/:id', billController.edit)
router.delete('/:id', billController.delete)


module.exports = router;