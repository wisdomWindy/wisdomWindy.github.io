<template>
  <div class="container">
    <el-upload 
    ref="uploadRef" 
    class="upload-demo" 
    accept="docx,excel,pdf" 
    :auto-upload="false" 
    :on-remove="handleRemove"
    :on-change="handleChange">
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
    </el-upload>
    <VueOfficeDocx v-if="showPreview" :src="docxUrl" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueOfficeDocx from '@vue-office/docx';
import '@vue-office/docx/lib/index.css'
import type {UploadFile} from 'element-plus/lib/components/index.js'

let docxUrl = ref<ArrayBuffer>();
let showPreview = ref(false);
/**
 * @description 上传文件发生变化时触发
 * @param {File} uploadFile 
 */
function handleChange(uploadFile: UploadFile) {
  let reader = new FileReader();
  reader.addEventListener('load', (e) => {
    docxUrl.value = e.target?.result as ArrayBuffer;
    showPreview.value = true;
  });
  reader.readAsArrayBuffer(uploadFile?.raw as Blob);
}
/**
 * @description 文件删除时触发
 */
function handleRemove() {
  showPreview.value = false;
}
</script>

<style scoped lang="scss">
.container
{
  width: 100%;
  height: 100%;
}
</style>
<style>
.vue-office-docx
{
  height: auto;
}
</style>