<template>
  <div>
    <q-radio v-model="answer" :val="option.id" :label="option.name" />
  </div>
</template>

<script>
export default {
  props: ['option'],
};
</script>

<style>

</style>
