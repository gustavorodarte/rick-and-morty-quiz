<template>
  <div>
    <img :src='imgUrl' width="300" height="300" >
     <q-inner-loading :visible="imgUrl" v-show="!imgUrl">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>

<script>
export default {
  props: ['imgUrl'],
};
</script>

<style>

</style>
