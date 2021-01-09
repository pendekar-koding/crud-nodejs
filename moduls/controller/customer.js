var jsonResult = require('../jsonResult')
var customer = require('../../models').customer
var path = require('path')
var dateFormat = require('dateformat')

var controller = function () {}

controller.getAll = function (req, res, next) {
    customer.findAll().then(entity => {
        if (entity){
            res.json(jsonResult(200, 'success', entity))
        }else {
            throw 'Customers not found';
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}

controller.findByCif = function (req, res) {
    var cif = req.params.cif
    customer.findByPk(cif).then(entity => {
        if (entity){
            res.json(jsonResult(200,'success', entity))
        }else {
            throw 'Customers not found';
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}

controller.findByName = function (req, res) {
    var name = req.body.first_name
    customer.findByPk(name).then(entity => {
        if (entity){
            res.json(jsonResult(200,'success', entity))
        }else {
            throw 'Customers not found';
        }
    }).catch(error => {
        res.json(jsonResult(500, error.message))
    })
}

controller.add = function (req, res, nect) {
    var data = req.body
    console.log(data)
    customer.create(data).then( entity => {
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
    var data = req.params.cif
    customer.findOne({where: {cif: data}}).then(entity => {
        if (entity) {
            return entity.update(req.body)
        }else {
            throw 'Customer not Found'
        }
    }).then(entity => {
        res.json(jsonResult(200, 'success', entity))
    }).catch(error => {
        res.json(jsonResult(500, error.message))
    })
}

controller.delete = function (req, res, next) {
    var cif = req.params.cif
    customer.destroy({where:{cif: cif}}).then(affectedRows => {
        if (affectedRows){
            res.json(jsonResult(200, 'success'))
        } else {
            throw 'Delete failed'
        }
    }).catch(error => {
        res.json(jsonResult(500,error.message))
    })
}
module.exports = controller
