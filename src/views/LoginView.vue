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
        :error="storeAuth.error"
        @update-field="updateField"
        @submit="submitForm"
        submit-text="Log In"
        :loading="formData.loading"
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
import { useAuth } from "@/stores/auth";

const storeAuth = useAuth();
const formData = reactive({
  items: [
    {
      name: "username",
      value: "",
      placeholder: "Username or Email",
      validation: { type: "required" },
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "Password",
      validation: { type: "required" },
    },
  ],
  loading: false
});


function updateField(index, value) {
  storeAuth.clearError();
  formData.items[index].value = value;
}

async function submitForm() {
  formData.loading = true;
  
  const data = {}
  formData.items.forEach((item) => {
    data[item.name] = item.value;
  });

  await storeAuth.login(data);

  formData.loading = false;

  formData.items.forEach((item) => {
    item.value = "";
  });
}
</script>

<style lang="sass" scoped></style>
