<template>
  <div class="login">
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <form v-on:submit.prevent="onSubmit(email, password);">
            <validation-provider class="form-group" rules="required|email" v-slot="{ errors }" tag="div">
              <input class="form-control form-control-lg" v-model="email" type="text" placeholder="Email" />
              <span id="error" class="alert-danger">{{ errors[0] }}</span>
            </validation-provider>

            <validation-provider class="form-group" :rules="{ regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ }" v-slot="{ errors }" tag="div">
              <input class="form-control form-control-lg" v-model="password" type="password" placeholder="Password"/>
              <span id="error" class="alert-danger">{{ errors[0] }}</span>
            </validation-provider>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { required, email, regex } from 'vee-validate/dist/rules'
import { ValidationProvider, extend } from 'vee-validate'

import json from './../store/TEST_MOCK_DATA'

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
})
extend('email', {
  ...email,
  message: 'This field is email'
})
extend('regex', {
  ...regex,
  message: 'The password string wrong format'
})

export default {
  el: '#login',
  components: {
    ValidationProvider
  },
  data () {
    return {
      userData: [...json],
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (email, password) {
      let isAuthen = [...json].filter(data => data.email === email && data.password === password)
      if (isAuthen.length > 0) {
        this.$router.push({ name: 'tab' })
      }
    }
  }
}
</script>

<style>
  /* Made with love by Mutiullah Samim*/

  @import url('https://fonts.googleapis.com/css?family=Numans');

  .container{
    background-size: cover;
    height: 100%;
    font-family: 'Numans', sans-serif;
    align-content: center;
  }

  .card{
    height: 370px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0,0,0,0.5) !important;
  }

  .social_icon span{
    font-size: 60px;
    margin-left: 10px;
    color: #FFC312;
  }

  .social_icon span:hover{
    color: white;
    cursor: pointer;
  }

  .card-header h3{
    color: white;
  }

  .social_icon{
    position: absolute;
    right: 20px;
    top: -45px;
  }

  .input-group-prepend span{
    width: 50px;
    background-color: #FFC312;
    color: black;
    border:0 !important;
  }

  input:focus{
    outline: 0 0 0 0  !important;
    box-shadow: 0 0 0 0 !important;

  }

  .remember{
    color: white;
  }

  .remember input
  {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
  }

  .login_btn{
    color: black;
    background-color: #FFC312;
    width: 100px;
  }

  .login_btn:hover{
    color: black;
    background-color: white;
  }

  .links{
    color: white;
  }

  .links a{
    margin-left: 4px;
  }
</style>
