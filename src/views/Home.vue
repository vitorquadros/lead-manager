<template>
  <div>
    <Wrapper>
      <Header pageName="Painel de Leads" />
      <ButtonAdd page="register">Novo Usuário (+)</ButtonAdd>
      <ButtonAdd page="new-lead">Novo Lead (+)</ButtonAdd>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import ButtonAdd from '@/components/Utils/ButtonAdd.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Wrapper,
    ButtonAdd,
  },
});
</script>
