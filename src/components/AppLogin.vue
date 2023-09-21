<template>
  <div class="login">
    <div class="container">
      <div class="login__content">
        <div class="login__header" v-if="slots.title || slots.text">
          <h1 class="title1 title1--primary login__title" v-if="slots.title">
            <slot name="title"></slot>
          </h1>
          <div class="text text--medium text--gray login__header-text" v-if="slots.text">
            <slot name="text"></slot>
          </div>
        </div>
        <div class="login__main">
          <slot name="form"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from "vue";

const slots = useSlots();
const emit = defineEmits(["updateField", "submitForm", "updateAgree"]);

function updateField(index, value) {
  emit('updateField', index, value);
}

defineProps({
  formTitle: {
    type: String,
    default: null,
  },
  formData: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.login
  &__header
    margin-bottom: 40px
    text-align: center

    &-text
      margin-top: 20px

  &__main
    margin: 0 auto
    max-width: 422px
</style>
