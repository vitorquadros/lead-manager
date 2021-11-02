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
  name: 'ButtonAdd',
  props: ['page'],
});
</script>

<style scoped>
#link {
  min-width: 15rem;
  margin-left: 2rem;
  margin-top: 2rem;
  background-color: #2196f3;
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.3rem;
  text-align: center;
}

#link:hover {
  opacity: 0.8;
}

#link {
  text-decoration: none;
  color: white;
  display: inline-block;
}
</style>
