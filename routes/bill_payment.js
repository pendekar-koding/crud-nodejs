var express = require('express');
var router = express.Router();
var paymentController = require('../moduls/controller/bill_payment');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

router.get('/', paymentController.getAll)
router.get('/:id', paymentController.findByid)
router.post('/', paymentController.add)
router.put('/:id', paymentController.edit)
router.delete('/:id', paymentController.delete)


module.exports = router;