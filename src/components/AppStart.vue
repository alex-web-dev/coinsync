<template>
  <div class="start">
    <div class="container">
      <div class="start__content">
        <h1 class="title1 title1--center start__title">Start your day with portfolio analytics!</h1>
        <h2 class="title3 title3--center start__subtitle">Quick start:</h2>
        <div class="start__list">
          <StartItem class="start__item">
            <template #text>
              <p>1. Securely connect crypto exchanges that you’re using</p>
            </template>
            <template #buttons>
              <AppButton color="white" hover-color="primary" to="#" :icon="true">
                <template #icon>
                  <IconBinance />
                </template>
              </AppButton>
              <AppButton color="white" hover-color="primary" to="#" :icon="true">
                <template #icon>
                  <IconBybit />
                </template>
              </AppButton>
              <AppButton :to="{ name: 'connect' }" color="white" hover-color="primary">Connect other</AppButton>
            </template>
          </StartItem>

          <StartItem class="start__item">
            <template #text>
              <p>2. Manage all the assets from one dashboard</p>
            </template>
          </StartItem>

          <StartItem class="start__item">
            <template #text>
              <p>3. Create your custom portfolio to check the particular crypto assets</p>
            </template>
            <template #buttons>
              <AppButton :to="{ name: 'overview' }" text-size="xl">Go to Portfolio Analytics</AppButton>
            </template>
          </StartItem>

          <StartItem class="start__item">
            <template #text>
              <p>
                4. Check all your orders from crypto exchanges in one place. Monitor your initial
                price and profit
              </p>
            </template>
          </StartItem>

          <StartItem class="start__item">
            <template #text>
              <p>5. Create your crypto strategies.</p>
            </template>
            <template #buttons>
              <AppButton text-size="xl">Go to Reporting</AppButton>
            </template>
          </StartItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StartItem from "@/components/StartItem.vue";
import AppButton from "@/components/AppButton.vue";
import IconBinance from "@/components/icons/companies/IconBinance.vue";
import IconBybit from "@/components/icons/companies/IconBybit.vue";
</script>

<style lang="sass" scoped>
.start
  &__content
    margin: 0 auto
    max-width: 794px

  &__title
    margin-bottom: 40px

  &__subtitle
    margin-bottom: 40px

  &__item
    &:not(:first-child)
      margin-top: 60px

  @media (max-width: 767px)
    padding-top: 10px
    
    &__title
      margin-bottom: 35px

    &__subtitle
      margin-bottom: 20px

    &__item
      &:not(:first-child)
        margin-top: 50px
</style>
