<script>
import Container from '@components/Container.vue';

export default {
  name: 'Main',
  components: {
    Container
  }
}
</script>

<template>
  <main class="container">
    <Container>
      <slot />
    </Container>
  </main>
</template>

<style scoped lang="scss">
.container {
  padding: 2rem 0;
}
</style>