<template>
  <v-app theme="dark">
    <v-main>
      <myheader />
      <mynav />
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-img src="./assets/images/Header.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <router-view />
      </v-row>
      <v-row justify="center" class="mb-5 mt-10">
        <v-card>
          <v-card-text>
            <p class="text-h4">
              新着記事
            </p> 
            
          </v-card-text>
        </v-card>
      </v-row>
      <v-row v-if="is_mobile"  justify="center">
        <template v-for="item in tips.get_new_items" >
          <v-col cols="6" class="d-flex align-center">
            <v-card
              color="#8D4004"
              theme="dark"
              height="300"
              width="80%"
              class="mx-auto"
              
              @click="to_tips(item)"
            >
              <v-card-title>
                {{item.title}}
              </v-card-title>
              <v-img :src="item.rootdir+item.imagepath" max-height="150px" cover></v-img>
              <v-card-text>
                {{ item.summary }}
              </v-card-text>
            </v-card>
          </v-col>

        </template>
      </v-row>
      <v-row v-if="is_mobile==false">
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
                v-for="item in tips.get_new_items"
                :key="item.title"
              >
              <v-card
              color="#8D4004"
              theme="dark"
              height="300"
              :width="card_width"
              class="ma-4"
              @click="to_tips(item)"
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
    </v-main>
  </v-app>
</template>

<script setup>
  import myheader from "./components/myheader.vue"
  import mynav from "./components/mynav.vue"
  import { useTipsStore } from '@/store/tips';
  import { computed,onMounted,provide } from 'vue';
  import { useDisplay } from 'vuetify'
  import { useRouter } from "vue-router";


  const tips = useTipsStore()
  const { name } = useDisplay()
  const card_width = computed(()=>{
    switch (name.value) {
          case 'xs': return "100%"
          case 'sm': return "100%"
          case 'md': return "100%"
          case 'lg': return "100%"
          case 'xl': return "30%"
          case 'xxl': return "30%"
        }
  })

  const is_mobile = computed(()=>{
    switch (name.value) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
          case 'xxl': return false
        }
  })

  const router = useRouter()
  const to_tips = (item)=>{
    let scroll_top = 0
    router.push({ name: 'markdownview', params: {'mdfile':item.rootdir + item.mdfile,'create_at':item.create_at,'last_modify':item.last_modify} })
    if(is_mobile.value){
      scroll_top = 0
    }else
    {
      scroll_top = 350
    }  
    window.scroll({top: scroll_top, behavior: 'smooth'});
    
  }

  onMounted(async() => {
    await tips.fetch_items()
  })

  provide('to_tips',to_tips)

</script>
