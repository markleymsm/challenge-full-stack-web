<template>
  <div v-if="currentStudent" class="edit-form py-3">
    <p class="headline">Editar Aluno</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentStudent.name"
          :rules="[(v) => !!v || 'Nome é obrigatorio']"
          label="Title"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentStudent.email"
          :rules="[(v) => !!v || 'E-mail é obrigatorio']"
          label="Title"
          required
      ></v-text-field>
<!--      <v-btn color="error" small class="mr-2" @click="deleteStudent">-->
<!--        Excluir-->
<!--      </v-btn>-->
      <v-btn color="success" class="mr-2" small @click="updateStudent">
        Atualizar
      </v-btn>
      <v-btn color="blue-grey" small @click="backStudentsList">
        Cancelar
      </v-btn>
    </v-form>
    <p class="mt-3">{{ message }}</p>
  </div>
  <div v-else>
    <p>Por favor clique em um Aluno...</p>
  </div>
</template>
<script>
import StudentDataService from "../services/StudentDataService";

export default {
  /* eslint-disable */
  name: 'student',
  data() {
    return {
      currentStudent: null,
      message: "",
    };
  },
  methods: {
    getStudent(id) {
      StudentDataService.get(id)
          .then((response) => {
            this.currentStudent = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    async updateStudent() {
      await StudentDataService.update(this.currentStudent.id, this.currentStudent)
          .then((response) => {
            console.log(response.data);
            this.message = "O aluno foi atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      this.$router.push({name: "students"});
    },
    deleteStudent() {
      StudentDataService.delete(this.currentStudent.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({name: "students"});
          })
          .catch((e) => {
            console.log(e);
          });
    },
    backStudentsList() {
      this.$router.push({name: "students"});
    },
  },
  mounted() {
    this.message = "";
    this.getStudent(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>