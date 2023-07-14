// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue"

export const useNavStore = defineStore('nav', ()=>{
  const is_nav = ref(false)
  const set_val = (val)=>{is_nav.value = val}
  return{
    is_nav,
    set_val
  }
})
