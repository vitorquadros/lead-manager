<template>
  <div id="container">
    <Block
      blockName="Cliente em Potencial"
      :groupConfig="{ name: 'first-block', put: false, pull: ['second-block'] }"
    />
    <Block
      blockName="Dados Confirmados"
      :groupConfig="{
        name: 'second-block',
        put: ['first-block'],
        pull: ['third-block'],
      }"
    />
    <Block
      blockName="Reunião Agendada"
      :groupConfig="{ name: 'third-block', pull: false, put: ['second-block'] }"
      :finished="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from '../components/Block.vue';

export default defineComponent({
  components: { Block },
});
</script>

<style scoped>
#container {
  display: flex;
  margin-bottom: 2rem;
}
</style>
