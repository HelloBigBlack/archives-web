<template>
  <module-page :pageTitle="'工作动态'">
    <template v-slot:header>
      <el-button size="small" type="primary" plain>
        <router-link :to="{name: 'addWorkNews'}" tag="a">添加动态</router-link>
      </el-button>
    </template>
    <template v-slot:content>
      <div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="标题"></el-table-column>
          <el-table-column prop="name" label="来源"></el-table-column>
          <el-table-column prop="name" label="新建日期"></el-table-column>
          <el-table-column prop="name" label="修改日期"></el-table-column>
          <el-table-column prop="name" label="作者"></el-table-column>
          <el-table-column prop="address" label="地址" width="200"></el-table-column>
        </el-table>
        <div class="pagination_container">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      currentPage: 1
    }
  },
  mounted() {
    for (let i = 1; i < 8; i++) {
      this.tableData[i] = this.tableData[i - 1]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  created() {}
}
</script>

<style lang='scss' scoped>
.pagination_container {
  margin-top: 12px;
  width: 100%;
  text-align: right;
}
</style>
