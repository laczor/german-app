<template>
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
        <!-- Type Select -->
        <v-select
          v-model="type"
          :items="['noun']"
          label="Type"
          :rules="[requiredRule]"
          required
        ></v-select>

        <!-- Word Count Input -->
        <v-text-field
          v-model="count"
          label="Count of words"
          type="number"
          :rules="[requiredRule, numberRule]"
          required
        ></v-text-field>

        <!-- Submit Button -->
        <v-btn type="submit" color="primary">Start</v-btn>
      </v-form>
</template>

<script setup>
 import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const type = ref('noun'); // Pre-set to "noun"
  const count = ref(null);
  const valid = ref(false);

  const requiredRule = value => !!value || 'Required.';
  const numberRule = value => !isNaN(value) || 'Must be a number.';

  const onSubmit = () => {
    if (valid.value) {
      router.push({
        path: `/practice/nouns`,
        query: { count: count.value }
      });
    }
  };
</script>