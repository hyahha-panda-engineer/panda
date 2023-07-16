<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto" width="70%">
            <p class="date_view">作成日:{{ prog_item.create_at }} <br /> 更新日:{{ prog_item.last_modify }} </p>
            <mymark :mdfilename="prog_item.rootdir + prog_item.mdfile" />
        </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useTipsStore } from '@/store/tips';
  import { onMounted,ref,computed } from 'vue';
  import mymark from '@/components/mymark.vue';

  const tips = useTipsStore()
  const prog_item = ref({})
 
  onMounted(async() => {
    await tips.fetch_items()
    prog_item.value = tips.get_category_items("prologue")[0]
  })

</script>
