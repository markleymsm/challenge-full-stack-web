<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="name" label="Pesquisar pelo nome"></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn small @click="searchName">
        Pesquisar
      </v-btn>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Consulta de alunos</v-card-title>
        <v-data-table
            :headers="headers"
            :items="students"
            disable-pagination
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editStudent(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="openModalDeleteStudent(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <ModalConfirmDelete v-if="showModalScheduleForm"
                            :idStudent="idStudent"
                            @closeModal="closeModal">
        </ModalConfirmDelete>
        <!--        <v-card-actions v-if="students.length > 0">-->
        <!--          <v-btn small color="error" @click="removeAllStudents">-->
        <!--            Remover todos-->
        <!--          </v-btn>-->
        <!--        </v-card-actions>-->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import StudentDataService from "../services/StudentDataService";
import ModalConfirmDelete from "@/components/ModalConfirmDelete";

export default {
  name: "students-list",
  components: {ModalConfirmDelete},
  data() {
    return {
      showModalScheduleForm: false,
      idStudent: null,
      students: [],
      name: "",
      headers: [
        {text: "Registro academico", align: "start", sortable: false, value: "academic_record"},
        {text: "Nome", value: "name", sortable: false},
        {text: "CPF", value: "cpf", sortable: false},
        {text: "Ações", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    retrieveStudents() {
      StudentDataService.getAll()
          .then((response) => {
            this.students = response.data.map(this.getDisplayStudent);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveStudents();
    },
    searchName() {
      StudentDataService.findByName(this.name)
          .then((response) => {
            this.students = response.data.map(this.getDisplayStudent);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    editStudent(id) {
      this.$router.push({name: "student-details", params: {id: id}});
    },
    deleteStudent(id) {
      StudentDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },
    closeModal() {
      this.showModalScheduleForm = false;
      this.idStudent = null;
      this.refreshList();
    },
    openModalDeleteStudent(id) {
      this.idStudent = id
      this.showModalScheduleForm = true;
    },
    getDisplayStudent(student) {
      return {
        id: student.id,
        name: student.name.length > 30 ? student.name.substr(0, 30) + "..." : student.name,
        academic_record: student.academic_record.length > 30 ? student.academic_record.substr(0, 30) + "..." : student.academic_record,
        email: student.email.length > 30 ? student.email.substr(0, 30) + "..." : student.email,
        cpf: student.cpf.length > 11 ? student.cpf.substr(0, 11) + "..." : student.cpf,
      };
    },
  },
  mounted() {
    this.retrieveStudents();
  },
};
</script>
<style>
.list {
  max-width: 750px;
}
</style>
