<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-subtitle>
      Please enter the Admin Key as configured in the API's environment
      variables
    </v-card-subtitle>
    <v-card-text>
      <v-form @submit="submit()" onSubmit="return false;">
        <v-text-field v-model="password" label="Password" dense></v-text-field>
        <v-btn @click="submit()" color="primary">Submit</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.password);
    },
  },
};
</script>
