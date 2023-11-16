<script>
import UserForm from "@/components/ControlPanel/UserForm.vue"
import UserTable from "@/components/ControlPanel/UserTable.vue"
export default {
  components: { UserForm, UserTable },
};
</script>

<template>
  <UserForm />
  <v-divider class="my-5"/>
  <UserTable />
</template>
