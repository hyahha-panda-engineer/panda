// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue"

export const useTipsStore = defineStore('tips', ()=>{
  const items = ref([{"title":"aa","subtitle":"b","category":"vue"},
                    {"title":"cc","subtitle":"dd","category":"python"},
                    {"title":"cc","subtitle":"dd","category":"python"},
                    {"title":"cc","subtitle":"dd","category":"python"},
                    {"title":"cc","subtitle":"dd","category":"python"},
                    {"title":"cc","subtitle":"dd","category":"python"},
                    {"title":"cc","subtitle":"dd","category":"python"}])
  return{
    items
  }
})
