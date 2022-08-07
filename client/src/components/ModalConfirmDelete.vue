<template>
  <div class="text-center">
    <v-dialog
        persistent
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 yellow lighten-2">
          Exclusão de alunos
        </v-card-title>

        <v-card-text>
          Deseja realmente excluir o aluno
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions  class="justify-center">
          <v-btn color="error" small class="mr-2" @click="deleteStudent">
            Excluir
          </v-btn>
          <v-btn
              color="blue-grey"
              small
              @click="cancelDelete"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import StudentDataService from "@/services/StudentDataService";

export default {
  name: "ModalConfirmDelete",
  props: ['idStudent'],
  data() {
    return {
      dialog: true
    }
  },
  methods: {
    async deleteStudent() {
      console.log('path', this.$route.path);
      let id = this.idStudent
      await StudentDataService.delete(id)
          .then(() => {
            this.cancelDelete()
          })
          .catch((e) => {
            console.log(e);
          });
    },
    cancelDelete() {
      this.dialog = false
      this.$emit('closeModal', false);
    }
  }
}
</script>

<style scoped>

</style>