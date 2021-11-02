<template>
  <div>
    <Wrapper>
      <Header pageName="Novo Lead" />

      <BackLink page="/">Voltar para leads</BackLink>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import Header from '@/components/Header.vue';
import BackLink from '@/components/BackLink.vue';

export default defineComponent({
  components: { Header, Wrapper, BackLink },
});
</script>

<style scoped></style>
