<template></template>

<script setup>
import { useAuth } from "@/stores/auth";

const storeAuth = useAuth();

storeAuth.logout();
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass
</style>
