<template>
<div>

  <section v-if="users.length" class="container">
    <!-- {{users[0].firstname}} {{users[0].lastname}} {{users[0]['.key']}} -->
    <pre>
        {{users}}
      </pre>
    <!-- {{this.$firebaseRefs.users.child('paul'['firstname'])}} -->

    <button @click="updateUserName(users[0],'adam')">update</button>
  </section>
  <button @click="addUser('paul88','paul','smith')">adduser</button>
</div>
</template>

<script>
import {
  db
} from '@/services/fireinit.js'
import Logo from '~/components/Logo.vue'

export default {
  components: {},
  data() {
    return {
      users: {}
    }
  },
  methods: {
    updateUserName(user, newName) {
      this.$firebaseRefs.users.child(user['.key']).child('firstname').set(newName)
    },

    addUser(username, firstname, lastname) {
      this.$firebaseRefs.users.push({
        'username': username,
        'lastname': lastname,
        'firstname': firstname
      })
    }

  },

  firebase: {
    users: {
      source: db.ref('users'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  }

}
</script>

<style>

</style>
