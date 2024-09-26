<template>
  <div class="root">
    <div class="header"><Base-header></Base-header></div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"><Base-footer></Base-footer></div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import { onMounted, onBeforeUnmount } from 'vue';
import router from './router';

onMounted(() => {
  localStorage.setItem('routes', JSON.stringify(router.getRoutes()));
});

onBeforeUnmount(() => {
  localStorage.remove('activePath');
});

</script>

<style lang="scss">
.root
{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
  box-sizing: border-box;
}

.footer
{
  height: 40px;
}

.header
{
  height: 60px;
}

.main
{
  flex: 1;
  height: calc(100% - 100px);
  overflow-y: scroll;
}

.container
{
  width: 100%;
}
</style>
