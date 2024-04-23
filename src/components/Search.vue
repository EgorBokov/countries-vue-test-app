<script>
import SearchIcon from '@icons/SearchIcon.vue';

export default {
  name: 'Search',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    inputHandler(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
  components: {
    SearchIcon,
  }
}
</script>

<template>
  <label class="input-container">
    <SearchIcon width="13" height="13" />
    <input :value="modelValue" @input="inputHandler" type="text" class="input-container__input">
  </label>
</template>

<style scoped lang="scss">
@import '@assets/variables.scss';

.input-container {
  background-color: $color-pale-white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: $deep-shadow;
  width: 100%;
  margin-bottom: 1.5rem;

  @media(min-width: 767px) {
    width: 280px;
    margin-bottom: 0;
  }

  &__input {
    margin-left: 2rem;
    outline: none;
    border: none;
    color: $color-black;
    background-color: $color-pale-white;
  }
}
</style>