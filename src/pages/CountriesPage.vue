<script>
import { reactive, onMounted, watch, inject, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Search from '@components/Search.vue';
import List from '@components/List.vue';
import Card from '@components/Card.vue';
import { encodeNameForHref } from "@/utils/customHrefEncoder.js";

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

    const searchValue = ref('');

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
      const encodedName = encodeNameForHref(countryName);

      router.push({
        path: `/${encodedName}`,
      });
    };

    const handleSearch = (countryTitle) => {
      let data = [...injectedCountries.value];

      if (countryTitle) {
        data = data.filter((elem) => elem.name.toLowerCase().includes(countryTitle.toLowerCase()));
      }

      filteredCountries.countries = [...data];
    }

    watch(injectedCountries, () => {
      handleSearch();
    });

    watch(searchValue, () => {
      handleSearch(searchValue.value);
    });

    onMounted(async () => {
      await getCountries();
    });

    return {
      filteredCountries,
      formattedCountriesList,
      handleRouteChange,
      searchValue,
    }
  }
}
</script>

<template>
  <Search v-model="searchValue" />
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