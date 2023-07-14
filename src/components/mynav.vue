<template>
     <v-navigation-drawer
      temporary  
      v-model="is_nav.is_nav"
      location="right"
      >
      </v-navigation-drawer>
</template>

<script setup>
    import { useNavStore } from '@/store/nav';

    const is_nav = useNavStore()

</script>