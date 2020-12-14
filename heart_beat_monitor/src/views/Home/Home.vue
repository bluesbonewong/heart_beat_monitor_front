<template>
  <div class="home">
    <el-container style="height: 100%;">
      <el-aside width="200px" style="background-color: rgb(48, 65, 86)">
        <el-menu
            background-color="rgb(48, 65, 86)"
            text-color="rgb(191, 203, 217)"
            active-text-color="rgb(64, 158, 255)"
            default-active="1"
        >
          <el-menu-item index="1">
            <template slot="title"><i class="el-icon-info"></i>项目介绍</template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title"><i class="el-icon-s-platform"></i>管理配置</template>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-operation"></i>客户端结点</template>
            <el-menu-item index="3-1">结点实时状态</el-menu-item>
            <el-menu-item index="3-2">实时状态图</el-menu-item>
            <el-menu-item index="3-3">历史状态图</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding: 0; height: inherit">
          <home-header></home-header>
        </el-header>
        <el-main style="background: #f0f2f5; padding: 32px">
          <component :is="currentComponent"></component>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/views/Home/components/HomeHeader'
import manageConfiguration from '@/views/manageConfiguration'

export default {
  name: 'Home',
  data() {
    return {
      currentComponent: 'manageConfiguration'
    }
  },
  components: {
    HomeHeader, manageConfiguration
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}

.el-menu > .el-menu-item:hover, .el-submenu__title:hover {
  background-color: #263445 !important;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
