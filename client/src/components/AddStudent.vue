<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Cadastro de alunos</p>
    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <p v-if="errors.length">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        </p>
        <v-text-field
            v-model="student.name"
            :rules="[(v) => !!v || 'Nome é obrigatorio']"
            label="Nome"
            required
        ></v-text-field>
        <v-text-field
            v-model="student.academic_record"
            :rules="[(v) => !!v || 'Registro acadêmico é obrigatorio']"
            label="Registro acadêmico"
            required
        ></v-text-field>
        <v-text-field
            v-model="student.email"
            :rules="[(v) => !!v || 'E-mail é obrigatorio']"
            label="email"
            required
        ></v-text-field>
        <v-text-field
            v-model="student.cpf"
            :rules="[(v) => !!v || 'CPF é obrigatorio']"
            label="CPF"
            required
        ></v-text-field>
      </v-form>
      <v-btn color="primary" class="mt-3" @click="saveStudent">Salvar</v-btn>
      <v-btn color="blue-grey" class="mt-3" @click="backStudentsList">Cancelar</v-btn>
    </div>
    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Salvo com sucesso!
        </v-card-title>
        <v-card-subtitle>
          Clique no botão para adicionar novo aluno.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="success" @click="newStudent">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import StudentDataService from "../services/StudentDataService";

export default {
  name: "add-student",
  data() {
    return {
      errors: [],
      student: {
        id: null,
        name: "",
        academic_record: "",
        email: "",
        cpf: "",
      },
      submitted: false,
    };
  },
  methods: {
    async saveStudent() {
     await this.checkForm();
      if (this.errors.length) {
        return true;
      }
      let data = {
        name: this.student.name,
        academic_record: this.student.academic_record,
        email: this.student.email,
        cpf: this.student.cpf,
      };
      StudentDataService.create(data)
          .then((response) => {
            this.student.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    newStudent() {
      this.submitted = false;
      this.student = {};
    },
    backStudentsList() {
      this.submitted = false;
      this.student = {};
      this.$router.push({name: "students"});
    },
    async checkForm() {
      this.errors = [];
      /* eslint-disable */
      if (!!!this.student.name) {
        this.errors.push('O campo Nome é Obrigatorio');
      }
      if (!!!this.student.academic_record) {
        this.errors.push('O campo Registro Acadêmico é Obrigatorio');
      }
      if (!!!this.student.email) {
        this.errors.push('O campo E-mail é Obrigatorio');
      }
      if (!!!this.student.cpf) {
        this.errors.push('O campo CPF é Obrigatorio');
      }
    }
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
}
</style>