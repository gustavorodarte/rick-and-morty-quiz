<template>
  <div>
    <q-field>
    <q-option-group
      type="radio"
      color="secondary"
      v-model="answer"
      :options="[
      { label: options[0] , value: options[0] },
      { label: options[1], value: options[1] },
      { label: options[2], value: options[2] }
      ]"
    />
    </q-field>
    <q-btn color="amber" label="ok" @click="$store.dispatch('answer/checkAnswer', answer)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['options'],
  data() {
    return {
      answer: null,
    };
  },
  methods: {
    ...mapActions(['question/checkAnswer',
    ]),
  },
};
</script>

<style lang="stylus">
  .q-option-label
    font-size 2em
</style>
