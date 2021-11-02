<template>
  <Wrapper>
    <Title />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '@/components/Utils/Wrapper.vue';
import Title from '@/components/Title.vue';

export default defineComponent({
  components: { Wrapper, Title },
});
</script>

<style scoped></style>
