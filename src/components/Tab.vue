<template>
  <div id="app">
    <vue-tabs>
      <v-tab title="First tab">
        <box-content @userSelected="childrenSelectUser"></box-content>
        <div class="user-detail-comp">
          <h4>User Detail</h4>
          <!-- pass 'userSelectedFromChild', child will use props 'userDetailInfo' -->
          <user-detail :userDetailInfo="userSelectedFromChild"></user-detail>
        </div>
      </v-tab>
      <v-tab title="Second tab">
      </v-tab>

      <v-tab title="Third tab">
        Third tab content
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import BoxContent from '@/components/BoxContent'
import UserDetail from '@/components/UserDetail'
export default {
  name: 'Tab',
  components: {
    BoxContent,
    UserDetail
  },
  data () {
    return {
      userSelectedFromChild: {}
    }
  },
  methods: {
    // Process event emitted from child
    childrenSelectUser (user) {
      console.log(user)
      this.userSelectedFromChild = user
    }
  }
}
</script>

<style scoped>

</style>
