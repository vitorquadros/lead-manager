<template>
  <div id="errors">
    <p>Ocorreram os seguintes erros:</p>
    <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['errors'],
});
</script>

<style scoped>
#errors {
  background-color: darkred;
  font-size: 1.4rem;
  align-self: center;
  text-align: center;
  width: 30rem;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem;
}

#errors p {
  margin: 0;
  font-weight: 600;
  margin-bottom: 1rem;
}

#errors span {
  display: block;
}

#errors span:not(:last-child) {
  margin-bottom: 0.7rem;
}
</style>
