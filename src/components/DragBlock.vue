<template>
  <div id="container">
    <h3>{{ blockName }}</h3>
    <draggable
      v-model="list"
      item-key="id"
      @change="handleChange"
      @add="handleChange"
      @remove="handleChange"
    >
      <template #item="{ element }">
        <Card id="card">
          {{ element.name }}
        </Card>
      </template>
    </draggable>

    <!-- <div>
      <pre>{{ list }}</pre>
    </div> -->
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import Card from '@/components/Card.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DragBlock',
  components: { draggable, Card },
  props: ['blockName', 'groupConfig', 'finished'],
});
</script>
