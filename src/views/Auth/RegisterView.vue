<template>
<div class="login-form">
  <h1 class="login-title">Register in our website</h1>
  <input type="email" class="form-control form-control-email" id="email" name="email" placeholder="Email" />
  <input type="password" class="form-control form-control-password" id="password" name="password" placeholder="Password" />
   <input type="password" class="form-control form-control-password" id="password" name="password" placeholder="Repeat Password" />
    <p class="login" >Already have an account?<router-link class="login" to="/"> Login</router-link></p>
  <button class="form-control form-control-btn">Register</button>

 </div>
</template>

<script>
export default {

}
</script>

<style scope>
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

.login{
  font-size: 1rem;
}

.form-control-btn {
  cursor: pointer;
  background-color: rgb(188, 42, 42);
  font-weight: 900;
}
</style>
