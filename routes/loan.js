var express = require('express');
var router = express.Router();
var loanController = require('../moduls/controller/loan');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

router.get('/', loanController.getAll)
router.get('/:loan_number', loanController.findByid)
router.post('/', loanController.add)
router.put('/:loan_number', loanController.edit)
router.delete('/:loan_number', loanController.delete)


module.exports = router;