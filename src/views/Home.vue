<template>
  <div class="container">
    <el-carousel indicator-position="outside" class="carousel">
      <el-carousel-item v-for="(img, index) in swiperList" :key="index">
        <img v-lazy="{ src: img.path, loading: '/favicon.ico' }" :alt="img.alt" class="carousel_img">
      </el-carousel-item>
    </el-carousel>
    <el-tabs v-model="activeName" type="border-card" class="tabs">
      <el-tab-pane label="人物" name="first">
        <el-row justify="space-between" class="row">
          <el-col :span="11" v-for="(black, index) in blackList" :key="index">
            <BaseCard :cardData="black"></BaseCard>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="剧场" name="second">
        <el-row justify="space-between" class="row">
          <el-col :span="11" v-for="(black, index) in blackList" :key="index">
            <BaseCard :cardData="black"></BaseCard>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { homeStore } from '@/stores/home';
import BaseCard from '@/components/BaseCard.vue';

const store = homeStore();

let swiperList = ref<ImageItem[]>([]);
let activeName = ref('first');
let num = ref(1);
let blackList = ref<CardItem[]>([]);

onBeforeMount(() => {
  swiperList.value = store.swiperList;
  blackList.value = store.blackList;
  setTimeout(() => {
    num.value++;
  }, 2000);
});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel_img
{
  object-fit: fill;
  width: 100%;
  height: 100%;
}
</style>
