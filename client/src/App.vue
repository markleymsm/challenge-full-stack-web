<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        Modulo Acadêmico
      </div>
      <v-btn to="/students" text>
        Alunos
      </v-btn>
      <v-btn to="/add" text>
        Cadastrar alunos
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "app",
};
</script>