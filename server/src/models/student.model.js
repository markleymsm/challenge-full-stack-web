module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        academic_record: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        }
    }, {tableName: "Students"});
    return Student;
};