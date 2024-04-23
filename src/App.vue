<template>
  <Header />
  <Main>
    <router-view />
  </Main>
</template>

<script>
import { computed, reactive, provide } from 'vue';
import Header from '@components/Header.vue';
import Main from '@components/Main.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: { Header, Main },
  setup() {
    const countries = reactive({ value: [] });

    const changeCountries = (value) => {
      countries.value = value;
    };

    const getCountries = async () => {
      try {
        const response = await axios.get('data.json');

        if (response?.data) {
          changeCountries(response.data);
        }
      } catch(error) {
        console.error(error.message);
      }
    };

    provide('countries', countries);
    provide('changeCountries', changeCountries);
    provide('getCountries', getCountries);

    return {};
  }
}
</script>