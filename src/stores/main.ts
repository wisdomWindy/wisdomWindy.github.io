import { ref } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  const webTitle = ref<string>('website')
  const menuList = ref<MenuItem[]>([
    {
      label: '首页',
      path: '/home'
    },
    {
      label: '工具',
      path: '/tool'
    },
    {
      label: '关于',
      path: '/about'
    }
  ])
  const test = ref<string>('')

  function setTest(payLoad: string) {
    test.value = payLoad
  }

  return { webTitle, menuList, test, setTest }
})
