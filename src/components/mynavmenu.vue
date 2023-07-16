<template>
    <v-menu
    location="left"
    open-on-hover
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
            :to="{ name: 'markdownview', params: {'mdfile':item.rootdir + item.mdfile,'create_at':item.create_at,'last_modify':item.last_modify} }"                >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>

<script setup>
    import { useTipsStore } from '@/store/tips';
    // import { defineProps } from 'vue';
    
    const props = defineProps({
        title: String,
        category: String,
    })
    const tips = useTipsStore()
    

</script>