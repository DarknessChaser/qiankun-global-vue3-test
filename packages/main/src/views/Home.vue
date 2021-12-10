<template>
  <div class="mainapp">
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>QianKun</h1>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li><router-link to="/huge-spa-1" >huge-1</router-link></li>
        <li><router-link to="/huge-spa-2" >huge-2</router-link></li>
      </ul>
      <!-- 子应用  -->
      <main id="subapp-container">
        <router-view />
      </main>
    </div>
  </div>
  <router-view/>
</template>

<script>
</script>

<style lang="scss">
.mainapp-header {
  > h1 {
    color: #333;
    font-size: 36px;
    font-weight: 700;
    margin: 0;
    padding: 36px;
  }
}

.mainapp-main {
  display: flex;

  .mainapp-sidemenu {
    width: 130px;
    list-style: none;
    margin: 0;
    margin-left: 40px;
    padding: 0;
    border-right: 2px solid #aaa;

    >li {
      color: #aaa;
      margin: 20px 0;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: #444;
      }

      &:first-child {
        margin-top: 5px;
      }
    }
  }
}

// 子应用区域
#subapp-container {
  flex-grow: 1;
  position: relative;
  margin: 0 40px;

  .subapp-loading {
    color: #444;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }
}


</style>