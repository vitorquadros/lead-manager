<template>
  <div id="container">
    <h3>{{ blockName }}</h3>
    <draggable
      v-model="list"
      item-key="id"
      ghost-class="ghost"
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
import Card from '@/components/DragComponents/Card.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DragBlock',
  components: { draggable, Card },
  props: ['blockName', 'groupConfig', 'finished'],

  data() {
    return {
      list: [],
      Toast: (<any>this).$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', (<any>this).$swal.stopTimer);
          toast.addEventListener('mouseleave', (<any>this).$swal.resumeTimer);
        },
      }),
    };
  },

  created() {
    this.list = JSON.parse(localStorage.getItem(this.blockName) || '[]');
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

  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'firstLead',
        disabled: false,
        ghostClass: 'ghost',
      };
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
  opacity: 0.5;
}

#finished:hover {
  opacity: 1;
}

#card:hover > #finished {
  display: inline;
}

.ghost {
  opacity: 0.5;
  background: gray;
  color: gray;
}
</style>
