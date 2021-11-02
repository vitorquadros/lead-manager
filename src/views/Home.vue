<template>
  <div>
    <Wrapper class="wrapper">
      <Header pageName="Painel de Leads" />
      <ButtonAdd page="register">Novo Usuário (+)</ButtonAdd>
      <ButtonAdd page="new-lead">Novo Lead (+)</ButtonAdd>
      <BlockSection />
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import ButtonAdd from '@/components/ButtonAdd.vue';
import BlockSection from '@/components/BlockSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Wrapper,
    ButtonAdd,
    BlockSection,
  },
});
</script>

<style scoped>
.wrapper {
  max-width: 80rem;
}
</style>
