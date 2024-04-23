<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CustomButton'
}
</script>

<style lang="scss" scoped>
@import '@assets/variables.scss';
  button {
    padding: 0 1rem;
    background-color: $color-pale-white;
    box-shadow: $deep-shadow;
    line-height: 2.5;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: $color-black;
    cursor: pointer;
  }
</style>

