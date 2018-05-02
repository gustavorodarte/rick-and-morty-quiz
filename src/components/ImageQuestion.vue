<template>
  <div>
    <img :src='imgUrl' width="300" height="300" >
     <q-inner-loading :visible="visible" v-show="!imgUrl">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>

<script>
export default {
  props: ['imgUrl'],
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style>

</style>
