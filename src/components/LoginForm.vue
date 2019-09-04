<template>
  <form class="login-form" @submit.prevent="login">
    <label>
      <span>Email:</span><input name="email" v-model="email" type="email" autocomplete="off" required>
    </label>
    <label>
      <span>Password:</span><input name="password" v-model="password" type="password" required>
    </label>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator';

  @Component()
  export default class LoginForm extends Vue {
    email = '';
    password = '';

    login() {
      console.log('it\'s about time!')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  label {
    display: flex;
    padding: 10px 0;
    align-items: center;

    span {
      width: 100px;
    }

    input {
      flex-grow: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      font-size: 14px;
    }
  }

  button {
    padding: 10px;
    background-color: #00C48D;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
  }
</style>
