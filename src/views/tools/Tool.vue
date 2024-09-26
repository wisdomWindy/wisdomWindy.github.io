<template>
 <div class="tool">
    <el-menu 
    class="menu" 
    mode="vertical" 
    :default-active="menuList[0].path" 
    active-text-color="var(--el-color-primary)" 
    text-color="#000" 
    :unique-opened="true" 
    :router="true">
      <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{ menu.label }}</el-menu-item>
    </el-menu>
    <div class="main">
      <router-view></router-view>
    </div>
 </div>
</template>

<script setup lang="ts">

const menuList = [{
  path:'/tool/videoTransform',
  label:'视频转换',
},{
  path:'/tool/base64',
  label:'base64'
},{
  path:'/tool/docxpreview',
  label:'docxPreview'
}];
</script>

<style scoped lang="scss">
 .tool{
  height: 100%;
  display: flex;
  overflow: hidden;
 }
 .main{
  flex:1;
  height:100%;
  padding-left:10px;
  padding-top:10px;
  overflow-y: auto;
  box-sizing: border-box;
 }
 .menu{
  width: 150px;
  height: 100%;
 }
</style>