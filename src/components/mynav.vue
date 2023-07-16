<template>
     <v-navigation-drawer
      temporary  
      v-model="is_nav.is_nav"
      location="right"
      >
        <mynavmenu
        category="prologue"
        title="プロローグ">

        </mynavmenu>
    
      </v-navigation-drawer>
</template>

<script setup>
    import { useNavStore } from '@/store/nav';
    import { useTipsStore } from '@/store/tips';
    import mynavmenu from '@/components/mynavmenu.vue'

    const is_nav = useNavStore()
    const tips = useTipsStore()

</script>