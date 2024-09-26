<template>
  <div class="contianer">
    <h2>个人介绍</h2>
    <div class="self-description">
      鄙人于2021年从事前端开发职业，距今已有{{ timeSpan }}年。主要技术栈是HTML、CSS、JavaScript、Vue、React、typescript、webpack、小程序。
    </div>
    <h2>联系我</h2>
    <div class="link-list">
      <el-link class="link" v-for="(link, index) in links" :key="index" :href="link.href" :alt="link.title"
        :title="link.title" :underline="false">
        <span :class="['iconfont', link.icon]"></span>
      </el-link>
    </div>
    <p>{{ sentense }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed } from 'vue'
import { ElLink } from 'element-plus'
let startDate = new Date('2021/03/08');
let timeSpan = computed(() => {
  return new Date().getFullYear() - startDate.getFullYear();
});
let sentense = ref<string>('');
let links = [{
  href: 'https://github.com/wisdomWindy',
  title: 'github',
  icon: 'icon-github',
}, {
  href: 'mailto:me@1659140773@qq.com',
  title: 'mail',
  icon: 'icon-email',
}, {
  href: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
  title: 'qq',
  icon: 'icon-QQ',
}];
onBeforeMount(() => {
  fetch('https://el-bot-api.elpsy.cn/api/words/young').then(res => {
    return res.json();
  }).then(result => {
    sentense.value = result[0];
  });
});
</script>

<style scoped lang="scss">
.contianer {
  padding: 10px;
}

.self-description {
  padding-top: 20px;
  margin-bottom: 20px;
}

.link {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;

  &-list {
    display: flex;
    padding: 20px 0;
  }
}
</style>