<template>
  <div class="manage-configuration">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <el-form-item label="IP Address" prop="IPAddress">
        <el-input v-model="ruleForm.IPAddress"></el-input>
      </el-form-item>
      <el-form-item label="Client Name" prop="clientName">
        <el-input v-model="ruleForm.clientName"></el-input>
      </el-form-item>
      <el-form-item label="CPU Number" prop="CPUNumber">
        <el-input v-model="ruleForm.CPUNumber"></el-input>
      </el-form-item>
      <el-form-item label="OS Select" prop="OSSelect">
        <el-select v-model="ruleForm.OSSelect" placeholder="请选择操作系统">
          <el-option label="Windows XP" value="WindowsXP"></el-option>
          <el-option label="Windows 10" value="Windows 10"></el-option>
          <el-option label="CentOS 6.5" value="CentOS 6.5"></el-option>
          <el-option label="Ubuntu 16.04" value="Ubuntu 16.04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="submit">
        <el-button class="submit-button" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button class="submit-button" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'manageConfiguration',
  data() {
    return {
      ruleForm: {
        IPAddress: '',
        clientName: '',
        CPUNumber: '',
        OSSelect: ''
      },
      rules: {
        IPAddress: [
          {required: true, message: '请输入IP Address', trigger: 'blur'}
        ],
        clientName: [
          {required: true, message: '请输入clientName', trigger: 'blur'}
        ],
        CPUNumber: [
          {required: true, message: '请输入CPUNumber', trigger: 'blur'}
        ],
        OSSelect: [
          {required: true, message: '请选择操作系统', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.manage-configuration {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}


.el-form-item__content {
  display: flex;
  justify-content: space-between;

  .submit-button {
    width: 45%;
  }
}
</style>
