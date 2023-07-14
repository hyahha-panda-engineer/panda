<template>
  <v-app theme="dark">
    <v-main>
      <myheader />
      <mynav />
      <v-contaner>
        <v-row justify="center">
          <v-col cols="10">
            <v-img src="./assets/images/Header.png"></v-img>
          </v-col>
        </v-row>
      </v-contaner>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import myheader from "./components/myheader.vue"
  import mynav from "./components/mynav.vue"
</script>
