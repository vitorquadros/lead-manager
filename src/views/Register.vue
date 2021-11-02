<template>
  <Wrapper class="wrapper">
    <div id="wrap">
      <Title class="title" />
      <RegisterForm />
    </div>

    <BackLink page="/">Voltar para leads</BackLink>
  </Wrapper>
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

<style scoped>
* {
  font-size: 1.6rem;
}

.wrapper {
  max-width: 40rem;
  border-radius: 0.5rem;
}

.title {
  margin-bottom: 3rem;
}

#wrap {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
