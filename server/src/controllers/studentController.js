let model = require('../models')
const genericController = require('./generic')

module.exports = () => {

    return new genericController(model.students);
}
