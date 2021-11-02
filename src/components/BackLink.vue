<template>
  <div>
    <router-link id="link" :to="page">
      <slot />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['page'],
});
</script>

<style scoped>
div {
  display: flex;
}

#link {
  font-size: 1.2rem;
  margin: auto;
  margin-bottom: 2rem;
}
</style>
