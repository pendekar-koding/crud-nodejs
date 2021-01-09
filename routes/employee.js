var express = require('express');
var router = express.Router();
var employeeController = require('../moduls/controller/employee');
var cors = require('cors');

router.use(
    cors(),
    function timelog(req, res, next) {
        console.log('Time', Date.now())
        next()
    })

router.get('/', employeeController.getAll)
router.get('/:id', employeeController.findByid)
router.post('/', employeeController.add)
router.put('/:id', employeeController.edit)
router.delete('/:id', employeeController.delete)


module.exports = router;