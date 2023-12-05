<script>
export default {
  props: {
    openUserForm: { type: Boolean, default: false }
  },
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
  computed: {
    isDialogVisible: {
      get () {
        return this.openUserForm
      },
      set (value) {
         this.$emit('openUserForm', value)
      }
    }
  }
};
</script>

<template>
  <v-dialog width="800" color="white" v-model="isDialogVisible" @click:outside="closeDialog">
    <v-card>
      <!-- <v-btn @click.native.stop="isDialogVisible = false">Close</v-btn> -->
      <template v-slot:title>
        <h3 class="py-2">{{ $t('control_panel.add_user.title') }}</h3>
      </template>
      <v-divider class="my-2"/>
      <div class="pa-6">
        <div class="d-flex flex-wrap justify-space-between">
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
              class="me-2"
              :label="$t('control_panel.add_user.first_name')"
            />
            <!-- :rules="firstNameRules" -->
            <v-text-field
              v-model="form.lastName"
              class="ms-2"
              :label="$t('control_panel.add_user.last_name')"
            />
            <!-- :rules="lastNameRules" -->
          </div>

          <div class="d-flex flex-wrap">
            <v-text-field
              v-model="form.password"
              class="me-2"
              :label="$t('control_panel.add_user.password')"
              :type="showPassword ? 'text' : 'password'"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
            />
            <v-text-field
              v-model="passwordCheck"
              class="ms-2"
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
      </div>
    </v-card>
  </v-dialog>
</template>
