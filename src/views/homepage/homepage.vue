<template>
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]" router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>

        <el-menu-item-group>
          <el-menu-item index="dashboard">控制面板</el-menu-item>
          <el-menu-item index="apilist">接口</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import service from '@/api'
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
    api_detail () {
      let _that = this
      service.list()
        .then(rsp => {
          // 获取msg和apilist
          if (rsp.status === 200) {
            _that.msg = rsp.msg
            _that.detaillist = rsp.list
          }
        })
    }
  },
  created () {
    let _that = this
    service.list()
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
  .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .el-aside {
      color: #333;

    }
  /*
  找到html标签、body标签，和挂载的标签
  都给他们统一设置样式
  */
    html,body,#app,.el-container{
          /*设置内部填充为0，几个布局元素之间没有间距*/
          padding: 0px;
           /*外部间距也是如此设置*/
          margin: 0px;
          /*统一设置高度为100%*/
          height: 100%;
      }

</style>
