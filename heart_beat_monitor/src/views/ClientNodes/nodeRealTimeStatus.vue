<template>
  <div class="node-real-time-status">
    <div class="header">
      <div class="title">
        <mallki class-name="mallki-text" text="客户端结点实时状态" />
      </div>
      <el-button @click="downloadExcel"><i class="el-icon-download"></i>导出Excel</el-button>
    </div>
    <inline-edit-table ref="inlineEditTable"></inline-edit-table>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import inlineEditTable from '@/views/ClientNodes/components/inline-edit-table.vue'

export default {
  name: 'nodeRealTimeStatus',
  components: {Mallki, inlineEditTable},
  methods: {
    downloadExcel() {
      this.$refs.inlineEditTable.handleDownload()
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #dedede;
  display: flex;
  padding: 10px;
  border-radius: 4px 4px 0 0;
  justify-content: space-between;
  align-items: center;

  > .title {
    font-size: 18px;

    .link--mallki {
      //color: black;
    }
  }

  .el-icon-download {
    padding-right: 4px;
  }
}
</style>
