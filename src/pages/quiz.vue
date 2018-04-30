<template>
  <q-page class="flex flex-center column">
    <q-card inline class="bigger q-ma-sm" color="tertiary" text-color="secondary">
      <q-card-media overlay-position="full">
        <image-question :imgUrl="question.imgQuestion"> </image-question>
      </q-card-media>
      <q-card-title class="relative-position">
        <h4>{{ question.text}}</h4>
      </q-card-title>
      <q-card-main>
        <options :options="question.options"> </options>
      </q-card-main>
      <q-card-separator />
    </q-card>
  </q-page>
</template>

<style lang="stylus">
  h4
    font-size 1.3em
    margin  0
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
      correctAnswer: 'answer/correctAnsewer',
      incorrectAnswer: 'answer/incorrectAnsewer',
    }),
  },
  watch: {
    correctAnswer() {
      return this.$q.notify({
        message: 'Você acertou',
        timeout: 1000,
        type: 'positive',
        position: 'top-right',
      });
    },
    incorrectAnswer() {
      return this.$q.notify({
        message: 'Você Errou',
        timeout: 1000,
        type: 'negative',
        position: 'top-right',
      });
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
