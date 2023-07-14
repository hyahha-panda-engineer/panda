<template>
  <v-container>
    <v-row justify="center" class="mb-5">
      <v-card>
        <v-card-text>
          <p class="text-h4">
            何を作るか全く決まってない！！ <br />
            とりあえず、記事を書いて更新順に10個ぐらいカードで並べる
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
          height="200"
          width="100"
          class="ma-4"
          >
            <v-card-title>
              {{item.title}}
            </v-card-title>
          </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-row>


  </v-container>
</template>

<script setup>
  import { useTipsStore } from '@/store/tips';

  const tips = useTipsStore()

</script>
