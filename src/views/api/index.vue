<template>
<el-table :data="detaillist">
        <el-table-column prop="name" label="接口名称" >
        </el-table-column>
        <el-table-column prop="api" label="接口路径" >
        </el-table-column>
        <el-table-column prop="api_method" label="请求方法">
        </el-table-column>
        <el-table-column prop="api_intro" label="接口简介">
        </el-table-column>
        <el-table-column prop="created" label="创建时间">
        </el-table-column>
      </el-table>
</template>

<script>
import service from '@/api'
// eslint-disable-next-line no-unused-vars
import { serializeData } from '@/utils/common'
export default{
  name: 'detail',
  data () {
    return {
      msg: '',
      detaillist: [],
      username: this.$storage.localGet('username')
    }
  },

  methods: {

  },
  created () {
    let _that = this
    let obj = {
      // web_token: this.$storage.sessionGet("web_token")
    }
    service.list(obj)
      .then(rsp => {
        if (rsp.status === 200) {
          _that.msg = rsp.msg
          _that.detaillist = rsp.list
        }
      })
  }
}
</script>

<style>
</style>
