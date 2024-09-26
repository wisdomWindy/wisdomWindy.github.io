<template>
  <div class="video-transform">
    <el-upload ref="uploadRef" class="upload-demo" accept="video/*" :auto-upload="false" :on-change="handleChange">
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
    </el-upload>
    <video class="video" ref="video"></video>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { ElMessage } from 'element-plus';
import type { UploadFile } from 'element-plus/lib/components/index.js';

const video = ref<HTMLVideoElement>();
const ffm = new FFmpeg();
const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd';


function handleChange(uploadFile: UploadFile) {
  Promise.all([toBlobURL(`${baseUrl}/ffmpeg-core.js`, 'text/javascript'),
  toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, 'application/wasm')]).then(res => {
    const [coreURL, wasmURL] = res;
    ffm.load({
      coreURL,
      wasmURL
    }).then(async () => {
      let fileStream = await fetchFile(uploadFile.raw);
      await ffm.writeFile('input.wmv', fileStream);
      await ffm.exec(['-i', 'input.wmv', '-f', 'mp4', 'output.mp4']);
      const fileData = await ffm.readFile('output.mp4');
      if (video.value) {
        video.value.src = URL.createObjectURL(new Blob([fileData], { type: 'video/mp4' }));
      }
    }).catch(err => {
      ElMessage.error({
        message: (err as { message: string }).message
      });
    });
  }).catch(err => {
    ElMessage.error({
      message: (err as { message: string }).message
    });
  });
}
</script>

<style scoped lang="scss">
.video
{
  width: 400px;
  height: 300px;
}
</style>