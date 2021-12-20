<template>
  <div class="personal-info">
    <b-container>
      <b-row align-h="center">
        <b-col md="6">
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Age:" label-for="input-2">
              <b-form-input
                id="input-3"
                v-model.number="age"
                placeholder="Enter age"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  components: {},
  computed: {
    email: {
      get() {
        return this.$store.state.userInfo.email;
      },
      set(value) {
        this.$store.dispatch('updateEmailAction', value);
      },
    },
    name: {
      get() {
        return this.$store.state.userInfo.name;
      },
      set(value) {
        this.$store.dispatch('updateNameAction', value);
      },
    },
    age: {
      get() {
        return this.$store.state.userInfo.age;
      },
      set(value) {
        this.$store.dispatch('updateAgeAction', value);
      },
    },
  },
};
</script>
