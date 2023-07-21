# 環境構築

<img src="/panda/markdownfile/vue/setup/setup.jpg" width="20%">

## 概要  

何をやるもまず環境を構築しないと始まらない。  
今回は下記環境を構築する。

- WSL
- vue.js(vite) + vuetify

環境構築？そんなの常識だろjk！！っていう人は巣に帰ってよし！  
OSはwindowsを想定しているがWSLより先はUbuntuの挙動なのでWSLを飛ばしてもらえればいい

<br />

## WSL

### WSLとは？

chatGPTに聞いた方が早いので詳しい説明はそっちに譲るが
「windowsでlinuxを簡単に動かすためのシステム」という認識でいい。  
え？Windowsでやればいいじゃん。linuxかぶれ乙！という意見が聞こえてきそうだが、
パンダさんは、コマンド周りの慣れが圧倒的にLinuxというかUbuntuにあるので今回はWSLを使う。  

### WSL（Ubuntu）環境の構築

windowsキーを押して「powershell」と打って強めにEnter、そこで下記コマンドを打つ。  
```posershell
wsl --install
```

これだけで環境構築が終わる（はず）。シンジ君よりやることが少ない。終わらない場合はchatGPT先生に聞いてほしい。

<br />

## vue.js

### vue.jsとは？

chatGPTに・・・ry  
webアプリを作るにはHTML+CSS+javascriptという鉄板構成があるが、この辺を一つのフレームワークで記述できるものがいくつかある。React,Angularなど人気のフレームワークに並ぶのが今回のvue.js。  
「基礎から学べこのうつけ！！」という声は無視してモダンなフレームワークで開発する。そっちのほうが圧倒的にモチベーションがあがるし、楽しい。vuejsでwebアプリと親しみながらHTML,CSS,javascriptを勉強すればいい。

### node.jsの導入

あれ？俺たちのvueはどこいった？  
vueだろうが何だろうが、まずjavascriptが動く環境が必要なのでnode.jsを構築する。まず、windowsキーを押して「ubuntu」と打ってEnterを強打するとUbuntuターミナルが立ち上がる。ここで下記コマンドを妄信的に打ってほしい。

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install node npm curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 18.16.2
nvm use 18.16.2
node -v
```

最後に v18.16.2とでればOK  
中身の解説が必要な場合は、chatGPTに上記スクリプトをそのまま張り付けて「このスクリプトの解説よろ！」って打てば一行ずつ懇切丁寧に解説してくれる。

<details>
<summary>chatGPTによる解説</summary>
上記のスクリプトは、UbuntuやDebianなどのLinuxディストリビューションでNode.jsのバージョン18.16.2をインストールするためのコマンドです。以下にスクリプトの解説を行います：

1. `sudo apt update`
   このコマンドは、パッケージマネージャーであるAPTを使用して、システムのパッケージリストを更新します。これにより、最新のパッケージ情報が取得されます。

2. `sudo apt upgrade -y`
   このコマンドは、APTを使用してインストール済みのパッケージを最新のバージョンにアップグレードします。 `-y` オプションは、アップグレードの際に追加の確認を求めないようにします。

3. `sudo apt install node npm curl`
   このコマンドは、`node`、`npm`、および`curl`パッケージをインストールします。`node`はNode.jsランタイム、`npm`はNode.jsパッケージマネージャー、そして`curl`はコマンドラインからURLを取得するツールです。

4. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
   このコマンドは、Node Version Manager（NVM）をインストールします。NVMは、Node.jsのバージョンを管理するためのツールであり、複数のNode.jsバージョンを簡単に切り替えることができます。

5. `source ~/.bashrc`
   `~/.bashrc` ファイルを読み込むコマンドです。NVMの設定は、`~/.bashrc` に追加されるため、このコマンドで設定を反映させます。

6. `nvm install 18.16.2`
   NVMを使用して、Node.jsのバージョン18.16.2をインストールします。

7. `nvm use 18.16.2`
   NVMを使用して、インストールしたNode.jsバージョン18.16.2を使用します。このコマンドにより、システム全体で使用するデフォルトのNode.jsバージョンが設定されます。

8. `node -v`
   `node`コマンドを使用して、現在のNode.jsバージョンを確認します。これにより、インストールされたNode.jsバージョンが18.16.2であることが確認できます。

これらのコマンドを順番に実行することで、Node.jsのバージョン18.16.2がインストールされ、使用可能になります。

</details>

### vue.jsの構築

ついにきた！  
今回入れるのvite＋vuejs+vuetifyの構成。  
viteはコンパイルとかもろもろするのに必要なビルドツール。詳しいことはパンダもよくわからない。  
vuetifyは我々のようなCSSが書けない人でもある程度戦えるようになるためのUIライブラリ。これを使っとけばある程度の見た目にはなる。  

とりあえず下記に従っていけば環境が構築できる（はず）  
これで君も立派なWebエンジニア！！

```bash
npm create vuetify

? Project name: › vuetify-project  #プロジェクト名を決める。プロジェクト名のフォルダが自動生成される
? Which preset would you like to install? › - Use arrow-keys. Return to submit. #構成を決めるここではcustomにする
    Default (Vuetify)
    Base (Vuetify, VueRouter)
    Essentials (Vuetify, VueRouter, Pinia)
❯   Custom (Choose your features)
? Use TypeScript? › No / Yes #今回はjsでつくる。お前らにはまだ早い。
? Use Vue Router? › No / Yes #SPAには必須なのでいれる
? Use Pinia? › No / Yes #状態管理ツール。便利なので入れる
? Use ESLint? › No / Yes #Linter。無いときついのでいれる
Would you like to install dependencies with yarn, npm, or pnpm? › - Use arrow-keys. Return to submit. #npmが幸せだと思う
    yarn
❯   npm
    pnpm
    none

```

### ついにdeploy

ついにwebエンジニアとしての第一歩を踏み出そう！

```bash
npm run dev
```

このコマンドあとブラウザで下記にアクセスしてみる  
http://localhost:3000

おめでとう！これが君のページだ🐼  
あとはこれをベースにどんどん作っていこう🐼