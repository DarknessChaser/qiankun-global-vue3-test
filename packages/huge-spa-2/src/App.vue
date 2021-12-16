<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/monaco">Monaco</router-link> |
      <router-link to="/echarts">Echarts</router-link> |
      <router-link to="/logs">Logs</router-link><br /><br />
      <router-link to="/echarts1">echarts1</router-link> |
      <router-link to="/echarts2">echarts2</router-link> |
      <router-link to="/echarts3">echarts3</router-link> |
      <router-link to="/echarts4">echarts4</router-link> |
      <router-link to="/echarts5">echarts5</router-link> |
      <router-link to="/echarts6">echarts6</router-link> |
      <router-link to="/echarts7">echarts7</router-link> |
      <router-link to="/echarts8">echarts8</router-link> |
      <router-link to="/echarts9">echarts9</router-link> |
      <router-link to="/echarts10">echarts10</router-link> |
      <router-link to="/echarts11">echarts11</router-link> |
      <router-link to="/echarts12">echarts12</router-link> |
      <router-link to="/echarts13">echarts13</router-link> |
      <router-link to="/echarts14">echarts14</router-link> |
      <router-link to="/echarts15">echarts15</router-link> |
      <router-link to="/echarts16">echarts16</router-link> |
      <router-link to="/echarts17">echarts17</router-link> |
      <router-link to="/echarts18">echarts18</router-link> |
      <router-link to="/echarts19">echarts19</router-link> |
      <router-link to="/daostyle">daostyle</router-link> |
    </div>
    <router-view/>
  </div>
</template>

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
