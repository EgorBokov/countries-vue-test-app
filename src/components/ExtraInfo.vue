<script>
export default {
  name: 'ExtraInfo',
  props: {
    nativeName: String,
    population: String,
    region: String,
    subRegion: String,
    capital: String,
    flag: String,
    topLevelDomain: Array,
    currencies: Array,
    languages: Array,
    borders: Array,
  },
  methods: {
    routerPush(item) {
      this.$router.push(item);
    }
  }
}
</script>

<template>
  <section class="wrapper">
    <img class="image" :src="flag" alt="">
    <div>
      <h1 class="title"></h1>
      <div class="list">
        <ul class="list__wrapper">
          <li class="list__wrapper-item">
            <b>Native name: </b>{{ nativeName }}
          </li>
          <li class="list__wrapper-item">
            <b>Population: </b>{{ population }}
          </li>
          <li class="list__wrapper-item">
            <b>Region: </b>{{ region }}
          </li>
          <li class="list__wrapper-item">
            <b>Population: </b>{{ subRegion }}
          </li>
          <li class="list__wrapper-item">
            <b>Native name: </b>{{ capital }}
          </li>
        </ul>

        <ul class="list__wrapper">
          <li class="list__wrapper-item">
            <b>Top Level Domain: </b> <span v-for="item in topLevelDomain" :key="item">{{ item }}</span>
          </li>
          <li class="list__wrapper-item">
            <b>Currency: </b> <span v-for="item in currencies" :key="item.code">{{ item.name }}</span>
          </li>
          <li class="list__wrapper-item">
            <b>Top Level Domain: </b> <span v-for="lang in languages" :key="lang.name">{{ lang.name }}</span>
          </li>
        </ul>
      </div>

      <div class="border-info">
        <b>Border Countries</b>
        <span v-if="!borders.length">
          There is no border countries!
        </span>
        <div v-else class="border-info__wrapper">
          <span class="border-info__wrapper-element" v-for="item in borders" :key="item" @click="routerPush(item)">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@assets/variables.scss';

.wrapper {
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
}

.image {
  max-width: 560px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.title {
  margin: 0;
  font-weight: $font-normal;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }

  &__wrapper {
    list-style: none;
    padding: 0;
    margin: 0;

    &-item {
      line-height: 1.8;
      & > b {
        font-weight: var(--fw-bold);
      }
    }
  }
}

.border-info {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: $font-bold;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    &-element {
      padding: 0 1rem;
      background-color: $color-pale-white;
      box-shadow: $deep-shadow;
      line-height: 1.5;
      cursor: pointer;
    }
  }
}
</style>