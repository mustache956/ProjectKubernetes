<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
      <label for="firstname">First Name:</label>
      <input type="text" v-model="firstname" required />

      <label for="lastname">Last Name:</label>
      <input type="text" v-model="lastname" />

      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Register</button>
    </form>
  
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <label for="firstname">firstname:</label>
        <input type="firstname" v-model="firstname" required />
        
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
    import http from "../http-common";

  export default {
    data() {
        return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    },
    methods: {
      registerUser() {
        
        const userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };

      console.log(userData);

      http.post('/register', userData)
            .then((res) => console.log(res))
            .catch((err) => console.error('Error occurred', err));
    //     fetch('http://localhost:3000/register', {
    //             method: 'POST',
    //             body: userData,
    //         })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.error('Error occurred', err));
    //     console.log("User registered:", this.username);
       },
      loginUser() {

        
        const userData = {
        firstname: this.firstname,
        password: this.password,
      };

        http.post('/login', userData)
            .then((res) => console.log(res))
            .catch((err) => console.error('Error occurred', err));        
            console.log("User logged in:", this.firstname);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }

  form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

  