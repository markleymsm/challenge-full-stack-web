
function CrudService(model) {
  this.model = model;
}

CrudService.prototype.list = async function () {
  try {
    let model = await this.model.findAll();
    return {data: model};
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.get = async function (id) {
  try {
    let model = await this.model.findByPk(id);
    return {data: model};
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.insert = async function (data) {
  try {
    let model = await this.model.create(data);
    return {data: model};
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.update = async function (id, data) {
  try {
    let model = await this.model.update(data, {where: {id: id}})
    return {data: model}
  } catch (e) {
    throw e;
  }
}

CrudService.prototype.delete = async function (id) {
  try {
    let model = await this.model.destroy({where: {id: id}});
    return {data: model}
  } catch (e) {
    throw e;
  }
}

module.exports = CrudService;
