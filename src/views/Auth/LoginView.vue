<template>
<div class="login-form">
  <h1 class="login-title">Enter into your account</h1>
  <input type="password" class="form-control form-control-password" id="password" name="password" placeholder="Email" />
  <input type="email" class="form-control form-control-email" id="email" name="email" placeholder="Password" />
  <p class="register" >Doesn't have an account?<router-link class="register" to="/register"> Register</router-link></p>
  <button class="form-control form-control-btn">Login</button>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  justify-content: center;
  color: #fff;
  align-items: center;
  margin: 50px auto;
}

.form-control {
  margin: 5px;
}

.register{
  font-size: 1rem;
}

.form-control-btn {
  cursor: pointer;
  background-color: rgb(188, 42, 42);
  font-weight: 900;
  margin-top: 1rem;
}
</style>
