<template>
  <div id="container">
    <form>
      <div id="container-form">
        <div id="form-info">
          <div class="input-container">
            <label>Nome *</label>
            <input v-model="lead.name" type="text" />
          </div>
          <div class="input-container">
            <label>Telefone *</label>
            <input v-model="lead.tel" type="tel" />
          </div>
          <div class="input-container">
            <label>Email *</label>
            <input v-model="lead.email" type="email" />
          </div>
        </div>

        <div id="form-oportunity">
          <label>Oportunidades *</label>
          <table>
            <tr>
              <th><input type="checkbox" v-model="selectAll" /></th>
              <th></th>
            </tr>

            <tr v-for="oportunity in opportunities" :key="oportunity">
              <td>
                <input type="checkbox" v-model="selected" :value="oportunity" />
              </td>
              <td colspan="4">{{ oportunity }}</td>
            </tr>
          </table>
        </div>
      </div>

      <button @click="handleSubmit">Salvar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      lead: {
        id: this.ID(),
        name: '',
        tel: '',
        email: '',
      },
      opportunities: ['RPM', 'Produto Digital', 'Analytics', 'BPM'],
      selected: [],
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
});
</script>

<style scoped></style>
