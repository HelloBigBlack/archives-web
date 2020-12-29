<template>
  <module-page v-loading="loading" :pageTitle="'新增工作动态'">
    <template v-slot:header>
      <el-button size="small">
        <router-link :to="{name: 'workNews'}" tag="a">返回</router-link>
      </el-button>
    </template>
    <template v-slot:content>
      <div class="form_container">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input placeholder="请输入标题" v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="文章来源">
            <el-select v-model="form.isLink" placeholder="请选择文章来源">
              <el-option label="本地文章" :value="0"></el-option>
              <el-option label="外部链接" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章链接" v-if="form.isLink === 1">
            <el-input v-model="form.articleLink"></el-input>
          </el-form-item>
          <el-form-item label="本地文章" v-if="form.isLink === 0">
            <el-select v-model="form.localId" filterable placeholder="请选择文章">
              <el-option label="云寻觅“海上香料之路”——“‘香料之路’档案”国际协调会云端召开" value="shanghai"></el-option>
              <el-option label="全市“不忘初心、牢记使命”档案文献开展" value="beijing"></el-option>
              <el-option label="市档案馆通过“全国示范数字档案馆”测评" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </module-page>
</template>

<script>
import api from '@/api/managerApi.js'
import ModulePage from '@/components/manager/module-page/ModulePage.vue'
export default {
  components: {
    ModulePage
  },
  data: function() {
    return {
      loading: false,
      form: {
        title: '',
        isLink: '',
        articleLink: '',
        localId: '',
        source: '日照档案馆',
        author: '日照档案馆'
      }
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      api
      .addWorkNews(this.form)
      .then(res => {
        this.$message({
          message: '添加成功！',
          type: 'success'
        });
        this.$router.push('/manager/workNews');
      })
      .catch(error => {
        this.$message({
          message: '添加失败！',
          type: 'error'
        });
        this.loading = false;
      })
    }
  },
  created() {
  }
}
</script>

<style lang='scss' scoped>
.form_container {
  width: 600px;
}
</style>
