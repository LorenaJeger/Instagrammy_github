<template>
  <div class="settings">
    <h1>Settings</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="update">
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">New password</label>
            <input
              v-model="newPassword"
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Change password</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      newPassword: "",
      successful: "",
    };
  },
  methods: {
    update() {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.newPassword).then(function() {
            console.log("Successfully updated.");
        })
        .catch(function(error) {
          // An error happened.
        });
    },
  }
};
</script> 