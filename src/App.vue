<template>
  <v-app>
    <v-app-bar app>
      <!-- Hamburger button to toggle the drawer -->
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="navigateTo(item.route)">
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>
           {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Main content -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateTo = (to: string) => {
  router.push(to);
};

const drawer = ref(false)
const items = [
  { title: 'Practice', icon: 'mdi-home', route: '/practice' },
  { title: 'Dictionary', icon: 'mdi-information', route: '/dictionary' },
  { title: 'Exam', icon: 'mdi-phone', route: '/exam' },
]
</script>

<style scoped>
/* Add any additional styles here */
</style>
