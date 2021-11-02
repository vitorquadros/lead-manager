<template>
  <div>
    <Wrapper class="wrapper">
      <Header pageName="Novo Lead" />
      <LeadForm />
      <BackLink page="/">Voltar para leads</BackLink>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import Header from '@/components/Header/Header.vue';
import BackLink from '@/components/Utils/BackLink.vue';
import LeadForm from '@/components/Forms/LeadForm.vue';

export default defineComponent({
  components: { Header, Wrapper, BackLink, LeadForm },
});
</script>

<style scoped>
.wrapper {
  max-width: 80rem;
}
</style>
