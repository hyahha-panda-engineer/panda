<template>
    <v-app-bar  >
        <v-img src="../assets/images/panda.jpg"  cover max-width="70"></v-img>
        <v-toolbar-title class="text-h4 d-none d-lg-block">Panda Engineer</v-toolbar-title>
        <v-spacer ></v-spacer>
        <v-btn size="x-large" icon="mdi-home-outline" @click="to_home" ></v-btn>
        <v-btn size="x-large" icon="mdi-twitter" href="https://twitter.com/kabunushi0601" target="_blank" ></v-btn>
        <v-btn  @click="is_nav.set_val(!is_nav.is_nav)" size="x-large"><v-icon> {{ is_nav.is_nav ? "mdi-dots-horizontal-circle":"mdi-dots-horizontal-circle-outline" }} </v-icon></v-btn>
    </v-app-bar>
</template>

<script>
    import { useRouter } from 'vue-router';

</script>

<script setup>
    import { useNavStore } from '@/store/nav';
    const is_nav = useNavStore()
    
    const router = useRouter()
    const to_home = ()=>{
        router.push("/")
    }


</script>