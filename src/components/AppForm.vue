<template>
  <form class="form box" @submit.prevent="submit">
    <div class="form__title" :class="titleClass" v-if="title">{{ title }}</div>
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
      <AppButton class="form__submit" size="sm" :disabled="!dataFilled && disableButton">
        {{ submitText }}
      </AppButton>
    </div>
    <div class="form__agreement" v-if="slots.agreement">
      <slot name="agreement"></slot>
    </div>
    <div class="form__footer">
      <slot name="footer"></slot>
    </div>
    <div class="form__forgot">
      <slot name="forgot"></slot>
    </div>
  </form>
</template>

<script setup>
import { computed, useSlots } from "vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

const slots = useSlots();
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  titleWeight: {
    type: String,
    default: null,
  },
  titleMb: {
    type: String,
    default: null,
  },
  data: {
    type: Object,
    default: null,
  },
  submitText: {
    type: String,
    default: "Send",
  },
  agree: {
    type: Boolean,
    default: true,
  },
  disableButton: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["focusField", "updateField", "submit"]);

const titleClass = computed(() => {
  return [
    props.titleWeight ? `form__title--${props.titleWeight}` : "",
    props.titleMb ? `form__title--mb-${props.titleMb}` : "",
  ];
});
const dataFilled = computed(() => {
  let isFilled = true;

  props.data.forEach((item) => {
    if (item.value === "") {
      isFilled = false;
      return;
    }
  });

  if (!props.agree) {
    return false;
  }

  return isFilled;
});

function submit() {
  if (!validateForm(props.data)) {
    return;
  }

  emit("submit");
}

function validateForm(data) {
  let isValid = true;

  data.forEach((item) => {
    if (item.validation && !validateItem(item, item.validation.type)) {
      isValid = false;
      return;
    }
  });

  return isValid;
}

function validateItem(item, type) {
  if (type === "required" && !item.value.trim()) {
    return false;
  }

  return true;
}
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.form
  padding: 25px 23px 20px

  &__title
    margin-bottom: 20px
    padding: 0 7px
    text-align: center
    font-size: 18px
    color: #000

    &--medium
      font-weight: 500

    &--mb-25
      margin-bottom: 25px

  &__main
    padding: 0 7px

  &__item
    &:not(:first-child)
      margin-top: 15px

  &__input
    width: 100%

  &__submit
    margin-top: 30px
    width: 100%

  &__agreement
    padding-left: 7px
    margin-top: 26px

  &__footer
    margin-top: 15px
    text-align: center

  &__forgot
    margin-top: 25px
    text-align: center

  @media (max-width: 767px)
    padding-left: 30px
    padding-right: 30px

    &__title
      margin-bottom: 25px

    &__forgot
      margin-top: 20px
</style>
