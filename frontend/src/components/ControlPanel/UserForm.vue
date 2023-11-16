<script>
export default {
  data() {
    return {
      passwordCheck: '',
      showPassword: false,
      form: {
        firstName: '',
        lastName: '',
        password: '',
        isAdmin: false,
      },
      // Rules
      firstNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
      lastNameRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'Last name can not contain digits.'
        },
      ],
    };
  },
};
</script>

<template>
  <v-sheet max-width="800" class="mx-auto">
    <div class="d-flex flex-wrap justify-space-between">
      <h3 class="py-4">{{ $t('control_panel.add_user.title') }}</h3>
      <div>
        <v-switch
          v-model="form.isAdmin"
          label="Is user admin"
          color="blue"
          hide-details
        />
      </div>
    </div>
    <v-form fast-fail @submit.prevent>
      <div class="d-flex flex-wrap">
        <v-text-field
          v-model="form.firstName"
          class="mx-2"
          :label="$t('control_panel.add_user.first_name')"
        />
        <!-- :rules="firstNameRules" -->
        <v-text-field
          v-model="form.lastName"
          class="mx-2"
          :label="$t('control_panel.add_user.last_name')"
        />
        <!-- :rules="lastNameRules" -->
      </div>

      <div class="d-flex flex-wrap">
        <v-text-field
          v-model="form.password"
          class="mx-2"
          :label="$t('control_panel.add_user.password')"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        />
        <v-text-field
          v-model="passwordCheck"
          class="mx-2"
          :label="$t('control_panel.add_user.password_check')"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        />
      </div>
    </v-form>
    <div class="d-flex justify-flex-end">
      <v-btn type="submit" style="margin-left: auto;" color="blue" class="mt-2">Submit</v-btn>
    </div>
  </v-sheet>
</template>
