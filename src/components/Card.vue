<script>
export default {
  name: 'Card',
  props: {
    img: {
      type: String,
      required: true
    },
    info: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <img class="card__image" />
    <div class="card__info">
      <h3 class="card__title"></h3>
      <ul class="card__list-info">
        <li class="card__list-info-item" v-for="item in info" :key="item.title">
          <b>{{ item.title }}</b>
          {{ item.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 5px;
  background-color: $color-pale-white;
  box-shadow: $deep-shadow;
  cursor: pointer;
  overflow: hidden;

  &__title {
    margin: 0;
    font-size: $medium;
    font-weight: $font-bold;
  }

  &__image {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: $deep-shadow;
  }

  &__info {
    padding: 1rem 1.5rem 2rem;
  }

  &__list-info {
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;

    &-item {
      font-size: $small;
      line-height: 1.5;
      font-weight: $font-light;

      & > b {
        font-weight: $font-bold;
      }
    }
  }
}
</style>