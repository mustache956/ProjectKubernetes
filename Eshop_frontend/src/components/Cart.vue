<template>
    <div>
      <h2>Your Cart</h2>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            {{ item.name }} - ${{ item.price }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [],
      };
    },
    mounted() {
      this.fetchCartItems();
    },
    methods: {
      fetchCartItems() {
        // Replace the URL with your backend API endpoint for fetching cart items
        const apiUrl = 'https://your-backend-api.com/cart';
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            this.cartItems = data;
          })
          .catch(error => {
            console.error('Error fetching cart items:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  h2 {
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  