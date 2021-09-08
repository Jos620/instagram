<template>
  <div class="login">
    <!--======================================================================|
    | Desktop Left Side                                                       |
    |=======================================================================-->
    <div class="login-left">
      <!-- Phones image =================================================== -->
      <div class="login__phones"></div>
    </div>

    <!--======================================================================|
    | Desktop Right Side                                                      |
    |=======================================================================-->
    <div class="login-right">
      <!--====================================================================|
      | Mobile Top Section                                                    |
      |=====================================================================-->
      <div class="login-top">
        <!-- Logo ========================================================= -->
        <div class="login__logo"></div>

        <!-- Facebook Login =============================================== -->
        <a class="login__facebook btn" href="#" @click.prevent="loginFacebook">
          <i class="ri-facebook-box-fill btn-icon"></i>
          Continue with Facebook
        </a>

        <!-- Divisor ====================================================== -->
        <div class="login__divisor">
          <div class="login__divisor-line"></div>
          OR
          <div class="login__divisor-line"></div>
        </div>

        <!-- Email and password login ===================================== -->
        <form class="login__form" @submit.prevent="login">
          <input class="login__form-input" type="text" placeholder="Email" v-model="user.email" />
          <input class="login__form-input" type="password" placeholder="Password" v-model="user.pass" />
          <input class="login__form-input" type="text" placeholder="Username" v-model="user.username" />
          <input class="login__form-submit btn" type="submit" value="Enter" />
        </form>

        <!-- Register ===================================================== -->
        <span class="login__register">
          Don't have an account?
          <nuxt-link class="login__register-link" to="/sign-up">Sign Up</nuxt-link>
        </span>
      </div>

      <!--====================================================================|
      | Mobile Bottom Section                                                 |
      |=====================================================================-->
      <div class="login-bottom">
        <!-- Copy ========================================================= -->
        <div class="login__copy">
          from
          <span class="login__copy-brand">JOS620</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style lang="scss" src="./login.scss" scoped></style>
<style lang="scss">
body {
  margin-top: 0;
}
</style>
