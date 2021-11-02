<template>
  <div>
    <Wrapper>
      <Header pageName="Painel de Leads" />
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Wrapper from '@/components/Utils/Wrapper.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Wrapper,
  },
});
</script>
