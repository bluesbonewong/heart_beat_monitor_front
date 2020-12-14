<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应的内容，所有的内容都会通过router-view进行展示 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  background: #fafbfc;
  height: 100%;
}
</style>
