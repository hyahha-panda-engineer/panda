# 自分のページにしていく①

<img src="/panda/markdownfile/vue/mypage_1/mypage.jpg" width="20%">

##　概要

今はまだ人から借りたページみたいになっていると思う。  
そこで自分のページにするべくいろいろ調整していく。  

<br />

## 最初の調整

まずは、わかりやすい構成にしていく。  
多分正攻法ではないがパンダがいつもやっていることを書いていく

### layoutフォルダの削除

意味が分かりにくいので、layoutは使わない。こなれてきたら使ってくれ。  
ということでlayoutフォルダを削除する  

<img src="/panda/markdownfile/vue/mypage_1/delete_layout.png" width="20%">

### routerファイルの更新

router/index.jsを更新する

<img src="/panda/markdownfile/vue/mypage_1/modify_router.png" width="20%">

先ほど削除したlayoutフォルダの関係で書き換えが必要なのと、  
なぜがデフォルトでバグがあるので修正していく  
とりあえず下記をコピペでOK。

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from "../views/Home.vue"    //homeのviewをインポート

//　ルーターの設定
const routes = [ 
  {
    path: '/',  //バスの設定。　/の場合ルートパスになる
    name: "home",   // 名前。名前でrouteすることもできる
    component: Homeview //割り当てるコンポーネントの設定
  },
]

// ここがデフォルトだとprocess.env.BASE_URLになっているが、正確には下記
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

```

### HellowWorld.vueを書き換える

<img src="/panda/markdownfile/vue/mypage_1/helloworld.png" width="20%">

ついにきた！！自分のページ！！  
現状の構成ではこのHelloWorld.vueの中身が表示されているため、ここを書き換えると表示内容を変えることができる。なので何も考えず下記をHelloWorld.vueにコピペ  

```javascript
<template>
  <v-container>
    ヒャッハー！汚物は消毒だぜぇ～！
  </v-container>  
</template>

<script setup>
  //
</script>
<style>

</style>
```

あとは前回同様npm run devを叩いてhttp://localhost:3000にアクセスすると、きっと素晴らしいページができているはずだ。  
少しだけvueファイルの構成について説明する  
`<template>`で囲われた部分が実際に表示される部分、つまりみんな大好きhtmlを書いていく。  
`<script>`で囲われた部分が動きの部分、つまりプログラマ気分に浸れるjavascriptを書いていく。  
`<style>`で囲われた部分が装飾の部分、つまりパンダはあまり理解していないCSSを書いていく。  

これでとりあえず自分のページができた。友達に自慢しよう🐼  
