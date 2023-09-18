<template>
  <form class="form box">
    <div class="form__title" v-if="title">{{ title }}</div>
    <div class="form__main">
      <div class="form__item" v-for="(item, index) in data" :key="item">
        <AppInput
          class="form__input"
          :type="item.type"
          :placeholder="item.placeholder"
          :model-value="item.value"
          :paste-btn="item.pasteBtn"
          @update:model-value="emit('updateField', index, $event)"
        />
      </div>
      <AppButton class="form__submit" size="sm">Connect</AppButton>
      <div class="form__footer">
        <AppButton class="form__footer-link" link text-color="gray">
          Add another Crypto exchange
        </AppButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

defineProps({
  title: {
    type: String,
    default: null,
  },
  data: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits(["focusField", "updateField"]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.form
  padding: 25px 30px 20px

  &__title
    margin-bottom: 20px
    text-align: center
    font-size: 18px
    color: #000

  &__item
    &:not(:first-child)
      margin-top: 15px

  &__input
    width: 100%

  &__submit
    margin-top: 30px
    width: 100%

  &__footer
    text-align: center

    &-link
      margin-top: 18px
      font-size: 11px
      text-decoration: underline

      &:hover
        color: $color-gray
        text-decoration: none

  @media (max-width: 767px)
    padding-left: 30px
    padding-right: 30px

    &__title
      margin-bottom: 25px
</style>
