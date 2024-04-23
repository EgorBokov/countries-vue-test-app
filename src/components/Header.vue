<script>
import Container from "@components/Container.vue";
export default {
  name: 'Header',
  components: { Container },
}
</script>

<template>
  <header class="header">
    <Container>
      <div class="wrapper">
        <p class="title">
          <router-link to="/">Where is the world!</router-link>
        </p>
      </div>
    </Container>
  </header>
</template>


<style lang="scss" scoped>
@import '@assets/variables.scss';
.header {
  box-shadow: $deep-shadow;
  background-color: $color-pale-white;
}

.title {
  color: $color-black;
  font-size: $small;
  text-decoration: none;
  font-weight: $font-bold;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
</style>