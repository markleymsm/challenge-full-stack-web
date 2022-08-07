const db = require("../models");
const Op = db.Sequelize.Op;

function CrudService(model) {
  this.model = model;
}

CrudService.prototype.list = async function (name) {
  try {
    let condition = name ? {name: {[Op.like]: `%${name}%`}} : null;
    return await this.model.findAll({where: condition});
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.get = async function (id) {
  try {
    return await this.model.findByPk(id);
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.insert = async function (data) {
  try {
    return await this.model.create(data);
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.update = async function (id, data) {
  try {
    return await this.model.update(data, {where: {id: id}})
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.delete = async function (id) {
  try {
    return await this.model.destroy({where: {id: id}})
  } catch (e) {
    throw e;
  }
}

module.exports = CrudService;
