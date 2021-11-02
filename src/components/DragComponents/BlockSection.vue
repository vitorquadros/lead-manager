<template>
  <div id="container">
    <DragBlock
      blockName="Cliente em Potencial"
      :groupConfig="{ name: 'firstBlock', put: false, pull: ['secondBlock'] }"
    />
    <DragBlock
      blockName="Dados Confirmados"
      :groupConfig="{
        name: 'secondBlock',
        put: ['firstBlock'],
        pull: ['thirdBlock'],
      }"
    />
    <DragBlock
      blockName="Reunião Agendada"
      :groupConfig="{ name: 'thirdBlock', pull: false, put: ['secondBlock'] }"
      :finished="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DragBlock from '@/components/DragComponents/DragBlock.vue';

export default defineComponent({
  components: { DragBlock },
});
</script>

<style scoped>
#container {
  display: flex;
  margin-bottom: 2rem;
}
</style>
