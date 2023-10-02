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
        :error="storeAuth.error"
        @update-field="updateField"
        @submit="submitForm"
        :agree="formData.isAgree"
        submit-text="Create Account"
        :loading="formData.loading"
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
import { useAuth } from "@/stores/auth";

const storeAuth = useAuth();
const formData = reactive({
  isAgree: false,
  items: [
    {
      name: "email",
      value: "",
      placeholder: "Email",
      validation: { type: "required" },
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "Password",
      validation: { type: "required" },
    },
    {
      name: "username",
      value: "",
      placeholder: "Username",
      validation: { type: "required" },
    },
  ],
  loading: false
});

function updateField(index, value) {
  storeAuth.clearError();
  formData.items[index].value = value;
}

function updateAgree(value) {
  formData.isAgree = value;
}

async function submitForm() {
  formData.loading = true;
  
  const data = {}
  formData.items.forEach((item) => {
    data[item.name] = item.value;
  });

  await storeAuth.register(data);

  formData.items.forEach((item) => {
    item.value = "";
  });

  formData.loading = false;
}
</script>

<style lang="sass" scoped></style>
