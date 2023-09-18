<template>
  <div class="input" :class="className">
    <input
      class="input__field"
      :class="fieldClass"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <button class="input__paste" type="button" v-if="pasteBtn" @click="paste">Paste</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  pasteBtn: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
});
const emit = defineEmits(["update:modelValue"]);
const className = reactive([props.type === "hidden" ? "input--hidden" : ""]);
const fieldClass = reactive([props.pasteBtn ? "input__field--append-btn" : ""]);

async function paste() {
  const copiedText = await navigator.clipboard.readText();
  emit("update:modelValue", copiedText);
}
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.input
  position: relative

  &__field
    padding: 15px
    width: 100%
    font-size: 14px
    border-radius: 5px
    border: 0.71px solid #E4E4E4
    background: #FCFCFC
    outline: none
    transition: border .3s

    &:focus
      border-color: $color-primary

    &::placeholder
      color: $color-light-gray

    &--append-btn
      padding-right: 72px

  &__paste
    position: absolute
    right: 15px
    top: 50%
    padding: 5px
    transform: translateY(-50%)
    color: $color-primary
    font-size: 12px

  &--hidden
    display: none

  @media (max-width: 767px)
    &__field
      padding: 12px 15px
</style>
