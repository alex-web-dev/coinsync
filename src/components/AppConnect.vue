<template>
  <div class="connect">
    <div class="container">
      <div class="connect__content">
        <h1 class="title2 connect__title">Connect Your new portfolio</h1>
        <div class="connect__main">
          <div class="connect__btns">
            <AppButton
              class="connect__btns-item"
              color="white"
              size="sm"
              v-for="exchange in exchanges"
              :key="exchange"
              @click="changeExchange(exchange)"
            >
              Connect <span class="connect__btns-item-value">{{ exchange }}</span>
            </AppButton>
          </div>
          <AppForm
            class="connect__form"
            :title="formTitle"
            @update-field="updateField"
            :data="formData.items"
            submitText="Connect"
            @submit="submitForm"
            :disable-button="false"
          >
            <template #footer>
              <AppButton
                link
                text-color="gray"
                text-hover-color="gray"
                text-size="xxs"
                text-line="under"
                text-hover-line="none"
              >
                Add another Crypto exchange
              </AppButton>
            </template>
          </AppForm>
        </div>
        <div class="connect__learn">
          <LearnItem class="connect__learn-item">
            <template #title>How to add new account?</template>
            <template #content>
              <p>1. Login to your Binance account on your computer</p>
              <p>
                2. Click on API Management from your profile icon dropdown menu on the top right.
              </p>
              <p>
                3. In give the API Key a label field type in what you want to call it, ex. Binance,
                then click Create.
              </p>
              <p>4. Input your Google authentication code (2FA) for Binance</p>
              <p>5. Open your verification email Binance sent you and click Confirm new API Key</p>
              <p>6. You can manually copy/paste your API and Secret Keys into the page</p>
            </template>
          </LearnItem>
          <LearnItem class="connect__learn-item">
            <template #title>Important note</template>
            <template #content>
              <p>We are only requesting view permissions.</p>
              <p>
                This does not give us access to your private keys nor the ability to move your
                funds. We only need this to show you your portfolio performance and analytics.
              </p>
            </template>
          </LearnItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import AppButton from "@/components/AppButton.vue";
import AppForm from "@/components/AppForm.vue";
import LearnItem from "@/components/LearnItem.vue";
import { useProfile } from "@/stores/profile";
import { useText } from "@/hooks/text";

const { capitalize } = useText();
const storeProfile = useProfile();
const exchanges = reactive(["binance", "bybit", "kucoin", "other"]);
const activeExchange = ref(exchanges[0]);
const formData = reactive({
  items: [
    {
      name: "exchange",
      type: "hidden",
      value: activeExchange.value,
      validation: { type: "required" },
    },
    {
      name: "connection",
      value: "",
      placeholder: "Connection name (optional)",
    },
    {
      name: "api_key",
      value: "",
      placeholder: "API Key",
      pasteBtn: true,
      validation: { type: "required" },
    },
    {
      name: "secret_key",
      value: "",
      placeholder: "API Secret",
      pasteBtn: true,
      validation: { type: "required" },
    },
  ],
});

const formTitle = computed(() => {
  return `New portfolio: ${capitalize(activeExchange.value)}`;
});

function updateField(index, value) {
  formData.items[index].value = value;
}

function changeExchange(name) {
  const exchangeField = formData.items.find((item) => item.name === "exchange");
  exchangeField.value = name;

  activeExchange.value = name;
}

function submitForm() {
  const data = {};
  formData.items.forEach((item) => {
    data[item.name] = item.value;
  });

  storeProfile.createExchangeCredential(data);

  formData.items.forEach((item) => {
    if (item.type === "hidden") {
      return;
    }

    item.value = "";
  });
}
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.connect
  &__title
    margin-bottom: 50px

  &__main
    position: relative
    display: flex

  &__btns
    margin: -20px -10px 0
    position: absolute
    left: 0
    top: 0
    display: inline-flex
    flex-direction: column
    align-items: flex-start

    &-item
      margin: 20px 10px 0
      width: 100%
      min-width: 204px

      &-value
        text-transform: capitalize

  &__form
    position: relative
    z-index: 1
    margin: 0 auto
    width: 422px
    max-width: 100%

  &__learn
    margin: 80px auto 0
    max-width: 996px

    &-item
      &:not(:first-child)
        margin-top: 60px

  @media (max-width: 1140px)
    &__form
      width: 380px

  @media (max-width: 991px)
    &__title
      margin-bottom: 30px

    &__main
      flex-direction: column

    &__btns
      position: static
      flex-direction: row
      flex-wrap: wrap

      &-item
        margin: 20px 10px 0
        width: calc(50% - 20px)
        min-width: auto

    &__form
      margin-top: 40px

    &__learn
      margin-top: 65px

  @media (max-width: 767px)
    &__form
      margin-top: 30px

    &__btns
      &-item
        padding: 10px 0
        font-size: 16px

    &__learn
      margin-top: 55px

      &-item
        &:not(:first-child)
          margin-top: 50px
          font-size: 16px

  @media (max-width: 360px)
    &__btns
      margin: -14px -7px 0

      &-item
        margin: 14px 7px 0
        width: calc(50% - 14px)
</style>
