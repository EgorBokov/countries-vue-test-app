<script>
import { reactive, onMounted, watch, inject, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Search from '@components/Search.vue';
import List from '@components/List.vue';
import Card from '@components/Card.vue';

export default {
  name: 'CountriesPage',
  inject: ['countries', 'changeCountries'],
  components: {
    Card,
    List,
    Search,
  },
  setup() {
    const router = useRouter();

    const injectedCountries = inject('countries');
    const getCountries = inject('getCountries');

    const filteredCountries = reactive({ countries: injectedCountries || [] });
    const formattedCountriesList = computed(() => {
      return [...Array.from(filteredCountries.countries)].map((c) => {
        return {
          img: c.flags?.png,
          name: c.name,
          info: [
            { title: 'Population', description: c.population.toLocaleString() },
            { title: 'Region', description: c.region },
            { title: 'Capital', description: c.capital },
          ],
        }
      });
    });

    const handleRouteChange = (countryName) => {
      router.push({
        path: `/${countryName}`,
      });
    };

    const handleSearch = (countryTitle) => {
      let data = [...injectedCountries.value];

      if (countryTitle) {
        data = data.filter((elem) => elem.value.name.toLowerCase().includes(countryTitle.toLowerCase()))
      }

      filteredCountries.countries = [...data];
    }

    watch(injectedCountries, () => {
      handleSearch();
    });

    onMounted(async () => {
      await getCountries();
    });

    return {
      filteredCountries,
      formattedCountriesList,
      handleRouteChange,
    }
  }
}
</script>

<template>
  <List>
    <Card
        v-for="item in formattedCountriesList"
        :key="item.name"
        v-bind="item"
        @click="handleRouteChange(item.name)"
    />
  </List>
</template>

<style scoped lang="scss">

</style>