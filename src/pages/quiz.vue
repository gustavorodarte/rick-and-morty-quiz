<template>
  <q-page class="flex flex-center">
    <h3>{{ question.text}}</h3>
    <image-question :imgUrl="question.imgQuestion"> </image-question>
    <options v-for="option in question.options" :key="option.id" :option="option"> </options>
  </q-page>
</template>

<style>

</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import ImageQuestion from './../components/ImageQuestion';
import Options from './../components/Options';

export default {
  name: 'PageIndex',
  components: {
    ImageQuestion,
    Options,
  },
  data() {
    return {
      seed: Math.random() * 436,
    };
  },
  computed: {
    ...mapGetters({
      characters: 'character/allCharacters',
      question: 'question/getQuestion',
    }),
    imgQuestion() {
      return this.characters[this.seed].image;
    },
  },
  methods: {
    ...mapActions(['question/generateQuestion',
    ]),
  },
  created() {
    this.$store.dispatch('question/generateQuestion');
  },
};
</script>
