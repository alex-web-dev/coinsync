<template>
  <RouterLink class="logo" :to="{ name: 'home' }">
    <img class="logo__img" :src="imgUrl" alt="" />
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { useImage } from "@/hooks/img";

const { getImage } = useImage();
const props = defineProps({
  description: {
    type: Boolean,
    default: false,
  },
});

const imgUrl = computed(() => {
  if (props.description) {
    return getImage("logo-desc.svg");
  }

  return getImage("logo.svg");
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.logo
  &__img
    display: block

  @media (max-width: 767px)
    &__img
      max-width: 156px
</style>
