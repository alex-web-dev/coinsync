<template>
  <TheHeader />

  <AppMain>
    <router-view></router-view>
  </AppMain>

  <TheFooter />

  <Teleport to="body">
    <TheMessages></TheMessages>
  </Teleport>
</template>

<script setup>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMessages from "@/components/TheMessages.vue";
import AppMain from "@/components/AppMain.vue";
</script>