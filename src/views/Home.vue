<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto" width="70%">
            <p class="date_view">作成日:{{ prog_item.create_at }} <br /> 更新日:{{ prog_item.last_modify }} </p>
            <mymark :mdfilename="prog_item.rootdir + prog_item.mdfile" />
        </v-card>
    </v-row>
    <v-row justify="center" class="mb-5">
      <v-card>
        <v-card-text>
          <p class="text-h4">
            新着記事
          </p> 
          
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="80%"
        >
          <v-slide-group
            class="pa-4"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="item in tips.items"
              :key="item.title"
            >
            <v-card
            color="#8D4004"
            theme="dark"
            height="300"
            :width="card_width"
            class="ma-4"
            :to="{ name: 'markdownview', params: {'mdfile':item.rootdir + item.mdfile,'create_at':item.create_at,'last_modify':item.last_modify} }"
            >
              <v-card-title>
                {{item.title}}
              </v-card-title>
              <v-img :src="item.rootdir+item.imagepath" max-height="150px" cover></v-img>
              <v-card-text>
                {{ item.summary }}
              </v-card-text>
            </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>


  </v-container>
</template>

<script setup>
  import { useTipsStore } from '@/store/tips';
  import { onMounted,ref,computed } from 'vue';
  import { useDisplay } from 'vuetify'
  import mymark from '@/components/mymark.vue';

  const tips = useTipsStore()
  const prog_item = ref({})
  const { name } = useDisplay()
  const card_width = computed(()=>{
    switch (name.value) {
          case 'xs': return "50%"
          case 'sm': return "50%"
          case 'md': return "50%"
          case 'lg': return "50%"
          case 'xl': return "30%"
          case 'xxl': return "30%"
        }
  })

  

  onMounted(async() => {
    await tips.fetch_items()
    prog_item.value = tips.get_category_items("prologue")[0]
  })

</script>
