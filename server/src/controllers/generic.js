const CrudService = require('../services/crud');

function GenericController(model) {
  this.service = new CrudService(model);

  this.index = async (req, res) => {
    try {
      let result = await this.service.list()
      return res.send(result);
    } catch (e) {
      return res.status(422).send({error: "Erro generic: " + e});
    }
  }

  this.add = async (req, res) => {
    try {
      let result = await this.service.insert(req.body);
      return res.json(result);
    } catch (e) {
      return res.status(422).send({error: "Erro generic: " + e});
    }
  }

  this.edit = async (req, res) => {
    try {
      let result = await this.service.update(req.params.id, req.body)
      return res.json(result);
    } catch (e) {
      return res.status(422).send({error: "Erro generic: " + e});
    }
  }

  this.view = async (req, res) => {
    try {
      let result = await this.service.get(req.params.id)
      return res.json(result);
    } catch (e) {
      return res.status(422).send({error: "Erro generic: " + e});
    }
  }

  this.delete = async (req, res) => {
    try {
      let result = await this.service.delete(req.params.id)
      return res.json(result);
    } catch (e) {
      return res.status(422).send({error: "Erro generic: " + e});
    }
  }
}

module.exports = GenericController;
