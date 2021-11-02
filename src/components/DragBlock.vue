<template>
  <div id="container">
    <h3>{{ blockName }}</h3>
    <draggable
      v-model="list"
      item-key="id"
      @change="handleChange"
      @add="handleChange"
      @remove="handleChange"
      :group="groupConfig"
    >
      <template #item="{ element }">
        <Card id="card">
          {{ element.name }}
          <span id="finished" v-if="finished" @click="handleDelete(element)"
            >✔</span
          >
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

  data() {
    return {
      list: [],
      Toast: this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer);
          toast.addEventListener('mouseleave', this.$swal.resumeTimer);
        },
      }),
    };
  },

  created() {
    this.list = JSON.parse(localStorage.getItem(this.blockName));
  },

  methods: {
    handleChange() {
      localStorage.setItem(this.blockName, JSON.stringify(this.list));
    },
    handleDelete(element) {
      if (
        confirm(
          'Tem certeza que deseja finalizar este lead? O lead será removido da lista permanentemente.'
        )
      ) {
        this.list = this.list.filter(({ id }) => id != element.id);
        this.handleChange();
        this.Toast.fire({
          icon: 'success',
          title: 'Lead finalizado com sucesso!',
        });
      }
    },
  },
});
</script>

<style scoped>
* {
  font-size: 1.6rem;
}

#container {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  margin: 1rem 1.95rem;
  min-width: 20rem;
  padding: 1rem 1rem;
  border: 1px solid;
}

h3 {
  text-align: center;
}

#finished {
  color: green;
  font-size: 2.5rem;
  transform: translateY(-5px);
  float: right;
  display: none;
  padding: 0 3px;
  transition: 0.5s;
  opacity: 50%;
}

#finished:hover {
  opacity: 100%;
}

#card:hover > #finished {
  display: inline;
}
</style>
