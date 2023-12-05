<script>
import UserForm from "@/components/ControlPanel/UserForm.vue"
import UserTable from "@/components/ControlPanel/UserTable.vue"
export default {
  components: { UserForm, UserTable },
  data () {
    return {
      openUserForm: false,
    }
  }
};
</script>

<template>
  <UserForm :openUserForm="openUserForm" @openUserForm="openUserForm = false" />
  <!-- <v-divider class="my-5"/> -->
  <UserTable @openUserForm="openUserForm = true" />
</template>
