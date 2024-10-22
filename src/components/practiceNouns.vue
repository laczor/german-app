<template>
    <v-container class="d-flex justify-center">
      <v-card class="pa-4" width="400">
        <!-- Plural Indicator (Flag) -->
        <v-chip v-if="word.isPlural" color="blue" text-color="white" outlined class="d-flex justify-end">(plural)</v-chip>
        <!-- Word with Preposition -->
        <div class="text-center my-4">
          <v-row justify="center" align="center">
            <!-- Preposition (Article) -->
            <v-col cols="auto">
              <span v-if="chosenArticle">{{ chosenArticle }}</span>
              <span v-else>_______</span>
            </v-col>

            <v-col cols="auto">
              <div> {{ word.value.word }} </div>
            </v-col>

            <v-col cols="auto">
              <div>( {{ word.value.translation }} )</div>
            </v-col>
          </v-row>
        </div>
        <!-- Preposition Buttons -->
        <v-row justify="space-around" class="my-4">
          <v-btn
            v-for="article in articles"
            :disabled="blockButtons"
            :key="article"
            :color="getButtonColor(article)"
            @click="checkAnswer(article)">
            {{ article }}
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </template>

<script setup>
import { ref, reactive } from 'vue';
import { Noun } from '../domain'

const word = reactive({});
const chosenArticle = ref('');
const showTranslation = ref(false);
const articles = ['der', 'die', 'das'];

const blockButtons = ref(false);

const words = [
  Noun({ word: 'Mann', translation: 'Man', article: 'der', isPlural: false }),
  Noun({ word: 'Frau', translation: 'Woman', article: 'die', isPlural: false }),
];

word.value = words[0];
const currentIndex = ref(0);

const getButtonColor = (article) => {
  if (!chosenArticle.value) return 'default';  // No article chosen yet
  if (article === word.value.article ) return 'green';
  return article === chosenArticle.value
    ? article === word.value.article ? 'green' : 'red'
    : 'default';
};
const showNextWord = () => {
  currentIndex.value = (currentIndex.value + 1) % words.length;
  const nextWord = words[currentIndex.value];
  word.value = nextWord;
  chosenArticle.value = '';  // Reset chosen article
};

const checkAnswer = (article) => {
  chosenArticle.value = article;
  blockButtons.value = true;

  const delay = article === article.value ? 1000 : 2000;

  setTimeout(() => {
    showNextWord();
    blockButtons.value = false;
  }, delay);
};
</script>

  <style scoped>
  .v-btn {
    min-width: 75px;
  }
  </style>
