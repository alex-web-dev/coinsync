<template>
  <AppLogin>
    <template #title>Welcome back to Coinsync</template>
    <template #text>
      New to Coinsync?
      <RouterLink :to="{ name: 'registration' }">Sign Up</RouterLink>
    </template>
    <template #form>
      <AppForm
        title="Let’s check your profit today!"
        title-weight="medium"
        title-mb="25"
        :data="formData.items"
        @update-field="updateField"
        @submit="submitForm"
        submit-text="Log In"
      >
        <template #forgot>
          <p class="text text--xs text--gray text--mt-10">
            Forgot password?
            <RouterLink to="#">Click here</RouterLink>
          </p>
        </template>
      </AppForm>
    </template>
  </AppLogin>
</template>

<script setup>
import { reactive } from "vue";
import AppLogin from "@/components/AppLogin.vue";
import AppForm from "@/components/AppForm.vue";

const formData = reactive({
  items: [
    {
      value: "",
      placeholder: "Username or Email",
      validation: { type: "required" },
    },
    {
      type: "password",
      value: "",
      placeholder: "Password",
      validation: { type: "required" },
    },
  ],
});

function updateField(index, value) {
  formData.items[index].value = value;
}

function submitForm() {
  formData.items.forEach((item) => {
    item.value = "";
  });
}
</script>

<style lang="sass" scoped></style>
