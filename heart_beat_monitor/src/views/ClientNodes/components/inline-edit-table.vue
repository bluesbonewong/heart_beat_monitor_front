<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="IP" min-width="25%">
        <template slot-scope="{$index, row}">
          <template v-if="row.edit">
            <el-input v-model="row.ip" class="edit-input" size="small" />
          </template>
          <span v-else>{{ row.ip }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Name" min-width="25%">
        <template slot-scope="{$index, row}">
          <template v-if="row.edit">
            <el-input v-model="row.name" class="edit-input" size="small" />
          </template>
          <span v-else>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" class-name="status-col" label="Status" min-width="25%">
        <template slot-scope="{$index, row}">
          <template v-if="row.edit">
            <el-radio v-model="row.online" :label="true">online</el-radio>
            <el-radio v-model="row.online" :label="false">offline</el-radio>
          </template>
          <el-tag v-else :type="row.online | status">
            {{ row.online ? 'Online' : 'Offline' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" min-width="25%">
        <template slot-scope="{$index,row}">
          <template v-if="row.edit">
            <el-button
                type="success"
                size="small"
                icon="el-icon-circle-check-outline"
                @click="confirmEdit($index, row)"
            >
              完成
            </el-button>
            <el-button
                class="cancel-btn"
                size="small"
                icon="el-icon-refresh"
                type="warning"
                @click="cancelEdit($index, row)"
            >
              取消
            </el-button>
          </template>
          <el-button
              v-else
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="row.edit=!row.edit"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InlineEditTable',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false
    }
  },
  filters: {
    status(val) {
      return val ? 'success' : 'danger'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      await axios.get('api/clients.json').then(this.getListDataSucc)
      this.listLoading = false
    },
    getListDataSucc(res) {
      const {data} = res;
      this.list = data.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalIp = v.ip //  will be used when user click the cancel botton
        v.originalName = v.name
        v.originalOnline = v.online
        return v
      })
    },
    cancelEdit(index, row) {
      // 还原
      this.list[index].ip = row.originalIp
      this.list[index].name = row.originalName
      this.list[index].online = row.originalOnline

      row.edit = false
      this.$message({
        message: '取消编辑，恢复之前状态',
        type: 'warning'
      })
    },
    confirmEdit(index, row) {
      console.log(index, row)
      // 更新original
      this.list[index].originalIp = row.ip //  will be used when user click the cancel botton
      this.list[index].originalName = row.name
      this.list[index].originalOnline = row.online
      // 更新list
      this.list[index] = row;
      row.edit = false
      this.$message({
        message: '编辑成功',
        type: 'success'
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['IP', 'Name', 'Status']
        const filterVal = ['ip', 'name', 'online']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '客户端列表',
          autoWidth: true,
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'online') {
          return v[j] ? 'Online' : 'Offline'
        }
        return v[j]
      }))
    }
  }
}
</script>

<style scoped>
.edit-input {
  /*padding-right: 100px;*/
}

.cancel-btn {
  /*position: absolute;*/
  /*right: 15px;*/
  /*top: 10px;*/
}
</style>
