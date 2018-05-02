<template>
  <q-page class="flex flex-center column">
     <q-card inline class="q-ma-sm" color="tertiary" text-color="secondary">
      <q-card-media overlay-position="top">
        <image-question :imgUrl="question.imgQuestion"> </image-question>
        <q-card-title slot="overlay">
        <span slot="subtitle" class="timer">{{ timer }}</span>
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <h4>{{ question.text}}</h4>
        <options :options="question.options"> </options>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style lang="stylus">
  .q-card-media-overlay
    color: #fff
    background: none
  .q-card
    max-width 300px
  h4
    font-size 2em
    margin  0
  .timer
    font-font-family RickAndMortyTitle
    font-size 5em
    float right
    color #7CFC00
</style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
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
      timer: 'game/getTimer',
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

    ...mapMutations(['game/decreaseTimer']),

    setTimer() {
      setInterval(this.$store.commit('game/decreaseTimer'), 1000);
    },
  },
  created() {
    this.$store.dispatch('question/generateQuestion');
  },
};
</script>
