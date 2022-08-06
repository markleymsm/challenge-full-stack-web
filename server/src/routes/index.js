let student = require('./student');

module.exports = (app) => {
  // app.get('/', function(req, res) {
  //   res.status(200).json({ title: 'Express' });
  // });

  student(app);
}
