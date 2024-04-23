<script>
import { useRoute, useRouter } from 'vue-router';
import { inject, onMounted, ref } from 'vue';
import CustomButton from '@components/CustomButton.vue';
import ExtraInfo from '@components/ExtraInfo.vue';
import ArrowLeft from '@icons/ArrowLeft.vue';
import {decodeNameForHref} from "@/utils/customHrefEncoder.js";

export default {
  name: 'CountryCardPage',
  components: {
    CustomButton,
    ArrowLeft,
    ExtraInfo,
  },
  setup() {
    const { params } = useRoute();
    const router = useRouter();
    const countries = inject('countries');
    const getCountries = inject('getCountries')

    const country = ref(null);
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await getCountries();
      handleGetExactCountry();

      isLoading.value = false;
    });

    const handleGetExactCountry = () => {
      const decodedNameFromHref = decodeNameForHref(params.name);

      country.value = Array.from(countries.value).find(({ name }) => name === decodedNameFromHref);
    };

    const handleRouterMoveBack = () => {
      router.go(-1);
    };

    return {
      country,
      isLoading,
      handleRouterMoveBack,
    }
  }
}
</script>

<template>
  <div>
    <div class="wrapper">
      <CustomButton @click="handleRouterMoveBack">
        <ArrowLeft width="20" height="20" /> Back
      </CustomButton>
    </div>
    <ExtraInfo v-if="country && !isLoading" v-bind="country" />
    <div v-else-if="isLoading">
      Loading...
    </div>
    <div v-else>
      No data found about this country.
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 1.5rem;
}
</style>