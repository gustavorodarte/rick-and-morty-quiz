<template>
  <div>
    <q-field
    helper="Pick one Name"
    label="Options"
   >
    <q-option-group
      type="radio"
      color="secondary"
      v-model="answer"
      :options="[
      { label: options[0].name , value: options[0] },
      { label: options[1].name, value: options[1] },
      { label: options[2].name, value: options[2] }
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

<style>

</style>
