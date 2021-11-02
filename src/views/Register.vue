<template>
  <Wrapper>
    <Title />
    <RegisterForm />
  </Wrapper>

  <BackLink page="/">Voltar para leads</BackLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import Title from '@/components/Title.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import BackLink from '@/components/BackLink.vue';

export default defineComponent({
  components: { Wrapper, Title, RegisterForm, BackLink },
});
</script>

<style scoped></style>
