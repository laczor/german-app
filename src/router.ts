import { createRouter, createWebHistory } from 'vue-router'
import PracticeView from './views/PracticeView.vue'
import DictionaryView from './views/DictionaryView.vue'
import ExamView from './views/ExamView.vue'
import practiceForm from "./components/practiceForm.vue";
import practiceNouns from "./components/practiceNouns.vue";

const routes = [
  {
    path: '/practice',
    component: PracticeView,
    children: [
      { path: '', component: practiceForm },
      { path: 'nouns', component: practiceNouns}
    ]
  },
  { path: '/dictionary', component: DictionaryView },
  { path: '/exam', component: ExamView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
