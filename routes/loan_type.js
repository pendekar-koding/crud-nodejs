var express = require('express');
var router = express.Router();
var loanTypeController = require('../moduls/controller/loan_type');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

router.get('/', loanTypeController.getAll)
router.get('/:id', loanTypeController.findByid)
router.post('/', loanTypeController.add)
router.put('/:id', loanTypeController.edit)
router.delete('/:id', loanTypeController.delete)


module.exports = router;