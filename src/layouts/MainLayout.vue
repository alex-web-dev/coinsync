<template>
  <TheHeader />

  <AppMain>
    <router-view></router-view>
  </AppMain>

  <TheFooter />
</template>

<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import AppMain from "@/components/AppMain.vue";
</script>