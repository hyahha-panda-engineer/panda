<template>
    <v-menu
    location="left"
    open-on-click>
        <template v-slot:activator="{ props }">
            <v-btn
            v-bind="props"
            color="#8D4004"
            width="100%"
            >
            <span style="color: bisque;">{{ title }}</span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
            v-for="(item, index) in tips.get_category_items(props.category)"
            :key="index"
            :value="index"
            @click="to_tips(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>

<script setup>
    import { useTipsStore } from '@/store/tips';
    import { useRouter } from 'vue-router';

    // import { defineProps } from 'vue';
    
    const router = useRouter()

    const props = defineProps({
        title: String,
        category: String,
    })
    const tips = useTipsStore()

    const to_tips = (item)=>{
        router.push({ name: 'markdownview', params: {'mdfile':item.rootdir + item.mdfile,'create_at':item.create_at,'last_modify':item.last_modify} })
        window.scroll({top: 350, behavior: 'smooth'});
    }

    

</script>