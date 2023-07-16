// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue"
import axios from 'axios'

const _SETTING_JSON_PATH = "/panda/setting.json"

export const useTipsStore = defineStore('tips', ()=>{
  const items = ref([])
  const fetch_items = async ()=>{
    await axios(_SETTING_JSON_PATH)
    .then((res)=>{
      items.value = res.data
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const get_category_items = (category)=>{
    return items.value.filter((item)=>{
      return item.category === category
    })
  }

  return{
    items,
    fetch_items,
    get_category_items
  }
})
