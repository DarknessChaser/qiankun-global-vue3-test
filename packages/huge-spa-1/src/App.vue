<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/daostyle">daostyle</router-link> |
      <button @click="toChildren()">跳到另一个子应用 No.2</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const toChildren = () => {
      window.history.pushState(null, null, '/huge-spa-2')
    };

    return {
      toChildren
    }
  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  text-align: center;
  color: #2c3e50;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
