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
      </div>

      <button @click="handleSubmit">Salvar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped></style>
