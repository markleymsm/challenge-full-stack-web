
module.exports = (app) => {
    let controller = require('../controllers/studentController')();

    app.get('/student/', controller.index);
    app.get('/student/:id', controller.view);
    app.post('/student/', controller.add);
    app.put('/student/:id', controller.edit);
    app.delete('/student/:id', controller.delete);


}