<template>
  <div id="container">
    <div ref="monacoContainer" id="editor-section"></div>
    <button @click="runCode">Run</button>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import { onMounted, ref } from "vue";
import data from "../data/monaco.js";

export default {
  name: "MMonacoEditor",
  setup() {
    let codeEditor = null;
    const monacoContainer = ref(null);

    function initEditor() {
      codeEditor = monaco.editor.create(monacoContainer.value, {
        value: data,
        language: "javascript",
        theme: "vs-dark"
      });
      window.codeEditor = codeEditor;
    }

    function runCode() {
      console.log("runCode");
    }

    onMounted(() => {
      console.log(monacoContainer.value);
      initEditor();
    })

    return { codeEditor, runCode, monacoContainer }
  },
};
</script>

<style>
  #editor-section {
    height: 500px;
  }
</style>