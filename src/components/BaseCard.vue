<template>
  <div class="base-card">
    <el-card :body-style="{ padding: '0px', display: 'flex' }" class="card">
      <img v-lazy="{src:cardData.imgUrl,loading:'/favicon.ico'}" class="card-image" />
      <div class="card__content" style="padding: 14px">
        <div class="card__title">{{ cardData.name }}</div>
        <div class="card__description">{{ cardData.description }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    default: () => {
      return {}
    }
  }
});


</script>

<style scoped >
.card
{
  height: 130px;
  font-size: 14px;
  margin-bottom: 20px;
}

.card__title
{
  font-size: 20px;
  font-weight: bold;
}

.card-image
{
  display: block;
  width: 100px;
  height: 100px;
  margin: 14px 0 0 14px;
}

.card__content
{
  flex: 1;
}

.card__description
{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
}</style>