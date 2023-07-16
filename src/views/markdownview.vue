<template>
    <v-container >
        <v-row>
            <v-card class="mx-auto" width="70%">
                <p class="date_view">作成日:{{ create_at }} <br /> 更新日:{{ last_modify }} </p>
                <mymark :mdfilename="mdfile" />
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
import mymark from '@/components/mymark.vue';
import { ref,watch } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mdfile = ref(null)
const create_at = ref(null)
const last_modify = ref(null)


onMounted(()=>{
    mdfile.value=route.params.mdfile
    create_at.value = route.params.create_at
    last_modify.value = route.params.last_modify
})
watch(()=>route.params.mdfile,(newVal,oldVal)=>{
    mdfile.value=route.params.mdfile
    create_at.value = route.params.create_at
    last_modify.value = route.params.last_modify
  },{deep:true})

</script>

<style>
.date_view {
  text-align: right;
  background-color: #0d1117;
}
</style>