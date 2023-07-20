<template>
     <v-navigation-drawer
      temporary  
      v-model="is_nav.is_nav"
      location="right"
      >
        <v-btn
            color="#8D4004"
            width="100%"
            @click="to_tips(prog_item)"
            >
            <span style="color: bisque;">プロローグ</span>
        </v-btn>

        <mynavmenu title="vue" category="vue"></mynavmenu>
        
      </v-navigation-drawer>
</template>

<script setup>
    import { useNavStore } from '@/store/nav';
    import mynavmenu from '@/components/mynavmenu.vue'
    import { useTipsStore } from '@/store/tips';
    import { inject,computed } from 'vue';

    const is_nav = useNavStore()
    const tips = useTipsStore()
    const to_tips = inject('to_tips')

    const prog_item = computed(()=>{
        return tips.get_category_items('prologue')[0]
    })


</script>