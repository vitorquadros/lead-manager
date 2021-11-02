<template>
  <Wrapper>
    <Title />
    <RegisterForm />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import Title from '@/components/Title.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default defineComponent({
  components: { Wrapper, Title, RegisterForm },
});
</script>

<style scoped></style>
