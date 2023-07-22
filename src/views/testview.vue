<template>
   TESTPAGE
</template>

<script setup>
import {useRoute} from 'vue-router'
import { useTipsStore } from '@/store/tips';


const route = useRoute()
const tips = useTipsStore()

console.log(route.params)
console.log(tips.get_items_from_id(route.params.id))

</script>