<template>
  <div class="home-header">
    <div class="title">
      分布式机群<i class="el-icon-s-marketing"></i>监管系统
    </div>
    <el-avatar class="user" shape="circle" src="https://tva1.sinaimg.cn/large/0081Kckwgy1glnnhq9dd7j30ga0gaaad.jpg" alt="大汪" title="大汪"></el-avatar>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss">
.home-header {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-left: 24px;

    > .el-icon-s-marketing {
      color: #409EFF;
      margin: 0 4px;
      font-size: 30px;
    }
  }

  .user {
    cursor: pointer;
    margin-right: 24px;
  }
}
</style>
