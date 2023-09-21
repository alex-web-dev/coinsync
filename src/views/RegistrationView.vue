<template>
  <AppLogin form-title="Let’s start your Crypto Journey today">
    <template #title>Welcome to Coinsync</template>
    <template #text>
      Already have an account?
      <RouterLink :to="{ name: 'login' }">Log In</RouterLink>
    </template>

    <template #form>
      <AppForm
        title="Let’s start your Crypto Journey today"
        title-weight="medium"
        title-mb="25"
        :data="formData.items"
        @update-field="updateField"
        @submit="submitForm"
        :agree="formData.isAgree"
        submit-text="Create Account"
      >
        <template #agreement>
          <AppCheckbox :checked="formData.isAgree" @update:checked="updateAgree">
            By clicking “Create Account”, you agree to
            <RouterLink to="#">Terms of Service</RouterLink>
            and
            <RouterLink to="#">Privacy Policy</RouterLink>
          </AppCheckbox>
        </template>
      </AppForm>
    </template>
  </AppLogin>
</template>

<script setup>
import { reactive } from "vue";
import AppLogin from "@/components/AppLogin.vue";
import AppForm from "@/components/AppForm.vue";
import AppCheckbox from "@/components/AppCheckbox.vue";

const formData = reactive({
  isAgree: false,
  items: [
    {
      value: "",
      placeholder: "Email",
      validation: { type: "required" },
    },
    {
      type: "password",
      value: "",
      placeholder: "Password",
      validation: { type: "required" },
    },
    {
      value: "",
      placeholder: "Username",
      validation: { type: "required" },
    },
  ],
});

function updateField(index, value) {
  formData.items[index].value = value;
}

function updateAgree(value) {
  formData.isAgree = value;
}

function submitForm() {
  formData.isAgree = false;
  formData.items.forEach((item) => {
    item.value = "";
  });
}
</script>

<style lang="sass" scoped></style>
