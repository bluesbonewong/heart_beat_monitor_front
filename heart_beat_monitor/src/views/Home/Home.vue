<template>
  <div class="home">
    <el-container style="height: 100%;">
      <el-aside width="200px" style="background-color: rgb(48, 65, 86)">
        <el-menu
            background-color="rgb(48, 65, 86)"
            text-color="rgb(191, 203, 217)"
            active-text-color="rgb(64, 158, 255)"
            :default-active="currentComponent"
            @select="switchMain"
        >
          <el-menu-item index="projectIntroduction">
            <template slot="title"><i class="el-icon-info"></i>项目介绍</template>
          </el-menu-item>
          <el-menu-item index="manageConfiguration">
            <template slot="title"><i class="el-icon-s-platform"></i>管理配置</template>
          </el-menu-item>
          <el-submenu index="clientNodes">
            <template slot="title"><i class="el-icon-s-operation"></i>客户端结点</template>
            <el-menu-item index="nodeRealTimeStatus">结点实时状态</el-menu-item>
            <el-menu-item index="realTimeStatusChart">实时状态图</el-menu-item>
            <el-menu-item index="historyStatusChart">历史状态图</el-menu-item>
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
import projectIntroduction from '@/views/ProjectIntroduction/projectIntroduction'
import manageConfiguration from '@/views/manageConfiguration'
import nodeRealTimeStatus from '@/views/ClientNodes/nodeRealTimeStatus'
import realTimeStatusChart from '@/views/ClientNodes/realTimeStatusChart'
import historyStatusChart from '@/views/ClientNodes/historyStatusChart'

export default {
  name: 'Home',
  data() {
    return {
      currentComponent: 'projectIntroduction'
    }
  },
  components: {
    HomeHeader, projectIntroduction, manageConfiguration, nodeRealTimeStatus, realTimeStatusChart, historyStatusChart
  },
  created() {
    let currentComponent = sessionStorage.getItem('currentComponent');
    console.log(currentComponent)
    if (currentComponent != null) {
      this.currentComponent = currentComponent;
    }
  },
  methods: {
    switchMain(index, indexPath) {
      let curComp = 'projectIntroduction'
      if (index !== 'clientNodes') curComp = index
      else curComp = indexPath

      sessionStorage.setItem('currentComponent', curComp)
      console.log(1)
      this.currentComponent = curComp
    }
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
