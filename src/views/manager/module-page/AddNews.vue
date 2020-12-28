<template>
  <module-page :pageTitle="'新增工作动态'">
    <template v-slot:header>
      <el-button size="small">
        <router-link :to="{name: 'workNews'}" tag="a">返回</router-link>
      </el-button>
    </template>
    <template v-slot:content>
      <div class="form_container">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </module-page>
</template>

<script>
import ModulePage from '@/components/manager/module-page/ModulePage.vue'
export default {
  components: {
    ModulePage
  },
  data: function() {
    return {
      form: {
        name: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {}
  },
  created() {}
}
</script>

<style lang='scss' scoped>
.form_container {
  width: 600px;
}
</style>
