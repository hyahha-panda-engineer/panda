# 自分のページにしていく②

<img src="/panda/markdownfile/vue/mypage_2/mypage_2.jpg" width="20%">

## 概要
さて前回までで自分のページができたと思う。  
今回はカウンターを作りながらjavascriptとvueについて学んでいく。

## 変数の表示

前回同様HelloWorld.vueに下記をコピペしてほしい

<details>
<summary>コード</summary>

```javascript
<template>
  <v-container>
    消毒した汚物の数：{{ count }}
  </v-container>
</template>

<script setup>
  const count = 10;
</script>

<style>
</style>
```

</details>
  

vuejsの場合htmlの所に二重波カッコで囲うとjavascript側の変数を表示することができる。  
今回の場合`<script>`内で定義したcountを`<template>`内の{{ count }}で表示している。  
是非、npm run devで確認してほしい。  

## 変数の変更と反映

さて変数を表示するだけだと面白くないのでボタンを押してこの変数を変えていきたいと思う。  


<details>
<summary>コード</summary>

```javascript
<template>
  <v-container>
    <v-btn @click="count=count+1">汚物を消毒</v-btn>
    消毒した汚物の数：{{ count }}
  </v-container>
</template>

<script setup>
  const count = 10;
</script>

<style>
</style>
```

</details>

このコードで汚物を消毒ボタンが追加されたと思う。  
v-btn内の@clickでボタンが押された時の挙動を設定しており、今回の場合はcountを1増やしている。  
が、ここでこのボタンを押してほしい・・・汚物が消毒されない。  
これはcountがリアクティブではないからだ。何も考えずに復唱してほしい。「countがリアクティブではない」  
細かい話は置いておいて、countが普通の定数の場合変更が表示に反映されないため、countをリアクティブな変数にする必要がある。そうリアクティブに。  
下記コードに変更する。  


<details>
<summary>コード</summary>

```javascript
<template>
  <v-container>
    <v-btn @click="count=count+1">汚物を消毒</v-btn>
    消毒した汚物の数：{{ count }}
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const count = ref(10);
</script>

<style>
</style>
```

</details>

これで見事に汚物が消毒できたと思う。このようにして、html側に変更を反映させるにはrefを使って変数を定義すればよい。実はほかにも方法があるが覚える必要は現段階ではない。  
さて、このcountを増やす部分だが関数として定義することもできる。

<details>
<summary>コード</summary>

```javascript
<template>
  <v-container>
    <v-btn @click="shodoku">汚物を消毒</v-btn>
    消毒した汚物の数：{{ count }}
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const count = ref(10);

  const shodoku = ()=>{
    count.value = count.value + 1;
  }

</script>

<style>
</style>
```

</details>

一行で記述できるものならいいが、複数行必要な場合は関数にする必要がある。ここで注目してほしいのは、countの後ろにvalueが付いている点だ。refを使った場合、script内は.valueを使ってアクセスし、html内では変数名でアクセスする。なんで？はご法度。そうゆうもんだと受け入れる方が進みが早いので受け入れていく。どうしても気になる人はvueの公式ドキュメントを参考にしてほしい。  

これで君も汚物を消毒できたはず🐼

## 補足

急に出てきたv-btnだが、これはvuetifyのコンポーネントで、いい感じボタンが作れる。詳しくはvuetify公式を参照されたし🐼






