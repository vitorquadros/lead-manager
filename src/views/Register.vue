<template>
  <Wrapper>
    <div id="wrap">
      <Title />
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

#wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
