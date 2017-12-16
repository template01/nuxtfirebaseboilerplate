<template>
<div>
  <button @click="googleSignUp">Google Sign In</button>
  <button @click="signOut">Sign Out</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    emailLogin() {
      this.$store.dispatch('signInWithEmail', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''
      }).catch((e) => {
        console.log(e.message);
      })
    },
    googleSignUp() {
      this.$store.dispatch('signInWithGoogle').then(() => {
        console.log('inside then statement on login');
      }).catch((e) => {
        console.log(e.message);
      })
    },
    signOut({
      commit
    }) {
      this.$store.dispatch('signOut').then(() => {
        console.log('inside then statement on signout');
      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
}
</script>
