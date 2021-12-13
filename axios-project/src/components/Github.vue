<template>
  <div class="app">
    <h1>My Github Account</h1>
    <div class="github-owner-infos" >
      <div class="github-owner-info login">Login : {{ githubOwnerLogin }}</div>
      <div class="github-owner-info id">ID : {{ githubOwnerId }}</div>
      <div class="github-owner-info avatar-url">Avatar URL : {{ githubOwnerAvatar }}</div>
      <div class="github-owner-info avatar-img">Avatar Image : <img v-bind:src="githubOwnerAvatar" alt="avatar-mathis-gasparotto-github"/></div>
    </div>
    <!-- <div v-for="info in githubOwnerInfos" class="github-owner-infos" :key="info">
      <div class="github-owner-info">Login : {{ info.login }}</div>
      <div class="github-owner-info">ID : {{ info.id }}</div>
      <div class="github-owner-info">Avatar URL : {{ info.avatar_url }}</div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Github',
  mounted () {
    axios
      .get('https://api.github.com/users/Mathis-Gasparotto')
      //.then(response => (this.githubOwnerInfos = response))
      .then(response => (
        this.githubOwnerLogin = response.data.login, 
        this.githubOwnerId = response.data.id, 
        this.githubOwnerAvatar = response.data.avatar_url
      ))
  },
  data () {
    return {
      //githubOwnerInfos: null,
      githubOwnerLogin: null,
      githubOwnerId: null,
      githubOwnerAvatar: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-img img {
  width: 200px;
}
</style>
