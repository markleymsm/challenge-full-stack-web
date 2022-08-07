
module.exports = (app) => {
    let controller = require('../controllers/studentController')();

    app.get('/api/students/', controller.index);
    app.get('/api/students/:id', controller.view);
    app.post('/api/students/', controller.add);
    app.put('/api/students/:id', controller.edit);
    app.delete('/api/students/:id', controller.delete);


}