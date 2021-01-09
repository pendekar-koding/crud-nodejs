var jsonResult = require('../jsonResult');
var loanType = require('../../models').loan_type;
var path = require('path');
var dateFormat = require('dateformat');

var controller = function () {}

controller.getAll = function (req, res, next) {
    loanType.findAll().then(entity => {
        if (entity){
            res.json(jsonResult(200, 'success', entity))
        }else {
            throw 'Loans not found';
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}

controller.findByid = function (req, res) {
    var id = req.params.loan_type_code
    loanType.findByPk(id).then(entity => {
        if (entity){
            res.json(jsonResult(200,'success', entity))
        }else {
            throw 'Loans not found';
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}

controller.add = function (req, res, nect) {
    var data = req.body
    console.log(data)
    loanType.create(data).then( entity => {
        if (entity){
            res.json(jsonResult(200,'success'))
        }else {
            throw 'create failed';
        }
    }).catch(error => {
        res.json(jsonResult(500, error.message))
    })
}

controller.edit = function (req, res, next) {
    var data = req.params.loan_type_code
    loanType.findOne({where: {loan_type_code: data}}).then(entity => {
        if (entity) {
            return entity.update(req.body)
        }else {
            throw 'Loan not Found'
        }
    }).then(entity => {
        res.json(jsonResult(200, 'success', entity))
    }).catch(error => {
        res.json(jsonResult(500, error.message))
    })
}

controller.delete = function (req, res, next) {
    var id = req.params.loan_type_code
    loanType.destroy({where:{loan_type_code : id}}).then(affectedRows => {
        if (affectedRows){
            res.json(jsonResult(200, 'success'))
        } else {
            throw 'Delete failed'
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}
module.exports = controller;
