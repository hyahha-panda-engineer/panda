<template>
  <v-container>
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
      <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="800"
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
          width="300"
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
    </v-row>


  </v-container>
</template>

<script setup>
  import { useTipsStore } from '@/store/tips';
  import { onMounted } from 'vue';

  const tips = useTipsStore()

  onMounted(() => {
    tips.fetch_items()
  })

</script>
