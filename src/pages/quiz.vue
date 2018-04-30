<template>
  <q-page class="flex flex-center">
    <h3 >{{ question.text}}</h3>
    <image-question :imgUrl="question.imgQuestion"> </image-question>
    <options :options="question.options"> </options>
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
