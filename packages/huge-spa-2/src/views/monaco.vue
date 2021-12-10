<template>
  <div id="container">
    <div id="editor-section"></div>
    <button @click="runCode">Run</button>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import { onMounted } from "vue";
import data from "../data/monaco.js";

export default {
  name: "MMonacoEditor",
  setup() {
    let codeEditor = null;

    function initEditor() {
      codeEditor = monaco.editor.create(document.getElementById("editor-section"), {
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
      initEditor();
    })

    return { codeEditor, runCode }
  },
};
</script>

<style>
  #editor-section {
    height: 500px;
  }
</style>