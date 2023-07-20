// Utilities
import { defineStore } from 'pinia'
import {ref,computed} from "vue"
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

  const get_new_items =computed(()=>{
    const temp_item = items.value.slice()
    temp_item.sort((a,b)=>{
      if (new Date(a.last_modify) < new Date(b.last_modify)) return 1;
      if (new Date(a.last_modify) > new Date(b.last_modify)) return -1;
      return 0;
    })
    return temp_item.slice(0,5)
    
  })

  return{
    items,
    fetch_items,
    get_category_items,
    get_new_items
  }
})
