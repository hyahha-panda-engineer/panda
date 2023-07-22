<template>
    <v-container >
        <v-row>
            <v-card class="mx-auto" width="90%">
                <p class="date_view">作成日:{{ create_at }} <br /> 更新日:{{ last_modify }} </p>
                <mymark :mdfilename="mdfile" />
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
import mymark from '@/components/mymark.vue';
import { useTipsStore } from '@/store/tips';
import { ref,watch } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const tips = useTipsStore();
const route = useRoute();
const mdfile = ref(null)
const create_at = ref(null)
const last_modify = ref(null)


const set_props = ()=>{
    const item = tips.get_items_from_id(route.params.id)[0]
    console.log(item.mdfile)
    mdfile.value = item.rootdir + item.mdfile
    create_at.value = item.create_at
    last_modify.value = item.last_modify
}

onMounted(()=>{
    console.log(route.params.id)
    set_props()
})
watch(()=>route.params.id,(newVal,oldVal)=>{
    set_props()
  },{deep:true})

</script>

<style>
.date_view {
  text-align: right;
  background-color: #0d1117;
}
</style>