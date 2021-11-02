<template>
  <div id="container">
    <header>
      <Title />
      <h3 v-if="pageName">{{ pageName }}</h3>
    </header>
  </div>
</template>

<script lang="ts">
import Title from './Title.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Title },
  props: ['pageName'],
});
</script>

<style scoped>
#container {
  background-color: white;
}

header {
  display: flex;
  margin: 2rem 2rem 0 2rem;
  align-items: flex-end;
  background-color: white;
}

header h3 {
  font-size: 1.6rem;
  margin: auto;
}
</style>
