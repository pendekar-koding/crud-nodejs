var express = require('express');
var router = express.Router();
var customerController = require('../moduls/controller/customer');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

    router.get('/', customerController.getAll)
    router.get('/:cif', customerController.findByCif)
    router.get('/:name', customerController.findByName)
    router.post('/', customerController.add)
    router.put('/:cif', customerController.edit)
    router.delete('/:cif', customerController.delete)


module.exports = router

