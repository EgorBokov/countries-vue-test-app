<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>