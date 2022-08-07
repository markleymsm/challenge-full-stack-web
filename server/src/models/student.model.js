module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        academic_record: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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