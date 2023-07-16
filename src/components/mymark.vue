<template>
    <div class="content">
      <div class="line-numbers language-markup markdown-body" v-html="mdToHtml"></div>
    </div>
  </template>
    
  <script>
    import { ref, computed,onMounted,watch } from "vue";
    // marked
    import { marked } from "marked";
    import {markedHighlight} from "marked-highlight";
    import { mangle } from "marked-mangle";
    import { gfmHeadingId } from "marked-gfm-heading-id";
  
    // prismjs
    import prism from "prismjs";
    import "prismjs/plugins/line-numbers/prism-line-numbers.js";
    import "prismjs/plugins/line-numbers/prism-line-numbers.css";
    import "prismjs/components/prism-python.js";
    import "prismjs/components/prism-bash.js";
    import "prismjs/components/prism-docker.js";
  
    import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
    import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
    import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
    import "prismjs/plugins/show-language/prism-show-language.js"; // display the language of the code block
    import "prismjs/plugins/custom-class/prism-custom-class";
    prism.plugins.customClass.map({ number: "prism-number", tag: "prism-tag" });
  
    marked.use(
      gfmHeadingId(),
      mangle(),
      markedHighlight({
      highlight: (code, lang) => {
        if (prism.languages[lang]) {
          return prism.highlight(code, prism.languages[lang], lang);
        } else {
          return code;
        }
      },
    }));
  </script>
  
  <script setup>
    const rootdir = "/panda/"
    const props = defineProps({
      mdfilename: String,
    });
    const mdfilepath =ref(""); 
    const markDown = ref("");
  
    // get markdown data
    const getMarkdownData = async () => {
      if (props.mdfilename == null){
        return
      }
      await fetch(mdfilepath.value)
        .then((response) => {
          return response.text()
        })
        .then((data) => {
          markDown.value = data
        });
      prism.highlightAll(); // perform the highlighting of the Code Blocks
    };
  
    // markdown to html
    const mdToHtml = computed(() => {
      const mdhtml = marked.parse(markDown.value);
      return mdhtml;
    });
  
    onMounted(() => {
      mdfilepath.value=rootdir + props.mdfilename
      getMarkdownData();
    });
  
    // watch mdfile
    watch(()=>props,(newVal,oldVal)=>{
      mdfilepath.value=rootdir + props.mdfilename
      getMarkdownData();
    },{deep:true})
  
  </script>
  
  <style>
    @import "prismjs/themes/prism-okaidia.css";
    @import "github-markdown-css/github-markdown-dark.css";

    .markdown-body  {
      font-size: 1.5rem;
    }

    .markdown-body h1 {
      font-size: 2.5rem;
    }
    .markdown-body h2 {
      font-size: 2rem;
    }


  </style>